// UniVibe — Authentication & Authorization Middleware
// JWT-based auth with bcrypt password hashing

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { stmts } = require('./database');

// In production, use environment variable
const JWT_SECRET = process.env.JWT_SECRET || 'univibe_secret_key_2026_ml_recommendation_engine';
const JWT_EXPIRY = '7d'; // Token expires in 7 days
const SALT_ROUNDS = 10;

// Available avatar emojis for profile
const AVATARS = ['👤', '🎬', '🍿', '🎭', '🎪', '🎯', '🦊', '🐱', '🦋', '🌟', '🔥', '💜', '🌈', '🎵', '🎮', '🚀'];

// ──────────────────────────────────
// REGISTRATION
// ──────────────────────────────────

async function register(username, email, password, displayName, age = 18) {
    // Validation
    if (!username || !email || !password) {
        return { success: false, error: 'Username, email, and password are required' };
    }

    if (username.length < 3 || username.length > 24) {
        return { success: false, error: 'Username must be 3-24 characters' };
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return { success: false, error: 'Username can only contain letters, numbers, and underscores' };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, error: 'Invalid email address' };
    }

    if (password.length < 6) {
        return { success: false, error: 'Password must be at least 6 characters' };
    }

    // Check if username or email already exists
    const existingUsername = stmts.getUserByUsername.get(username);
    if (existingUsername) {
        return { success: false, error: 'Username already taken' };
    }

    const existingEmail = stmts.getUserByEmail.get(email);
    if (existingEmail) {
        return { success: false, error: 'Email already registered' };
    }

    // Hash password & create user
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const userUid = 'UV-' + uuidv4().split('-')[0].toUpperCase();
    const avatarEmoji = AVATARS[Math.floor(Math.random() * AVATARS.length)];

    try {
        stmts.createUser.run({
            user_uid: userUid,
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password_hash: passwordHash,
            display_name: displayName || username,
            age: Math.max(1, Math.min(120, parseInt(age) || 18)),
            avatar_emoji: avatarEmoji
        });

        // Generate JWT token
        const token = generateToken(userUid, username);

        return {
            success: true,
            user: sanitizeUser(stmts.getUserByUid.get(userUid)),
            token
        };
    } catch (err) {
        return { success: false, error: 'Registration failed: ' + err.message };
    }
}

// ──────────────────────────────────
// LOGIN
// ──────────────────────────────────

async function login(usernameOrEmail, password) {
    if (!usernameOrEmail || !password) {
        return { success: false, error: 'Username/email and password are required' };
    }

    // Find user by username or email
    let user = stmts.getUserByUsername.get(usernameOrEmail.toLowerCase());
    if (!user) {
        user = stmts.getUserByEmail.get(usernameOrEmail.toLowerCase());
    }

    if (!user) {
        return { success: false, error: 'Invalid credentials' };
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
        return { success: false, error: 'Invalid credentials' };
    }

    // Generate JWT token
    const token = generateToken(user.user_uid, user.username);

    return {
        success: true,
        user: sanitizeUser(user),
        token
    };
}

// ──────────────────────────────────
// TOKEN MANAGEMENT
// ──────────────────────────────────

function generateToken(userUid, username) {
    return jwt.sign(
        { uid: userUid, username },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRY }
    );
}

function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return null;
    }
}

// ──────────────────────────────────
// MIDDLEWARE
// ──────────────────────────────────

/**
 * Express middleware to validate JWT and attach user to request.
 * Responds with 401 if no valid token provided.
 */
function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }

    // Attach user info to request
    const user = stmts.getUserByUid.get(decoded.uid);
    if (!user) {
        return res.status(401).json({ error: 'User not found' });
    }

    req.user = sanitizeUser(user);
    req.userUid = decoded.uid;
    next();
}

/**
 * Optional auth middleware — doesn't fail if no token.
 * Attaches user if valid token present.
 */
function optionalAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);
        if (decoded) {
            const user = stmts.getUserByUid.get(decoded.uid);
            if (user) {
                req.user = sanitizeUser(user);
                req.userUid = decoded.uid;
            }
        }
    }

    next();
}

// ──────────────────────────────────
// PROFILE UPDATE
// ──────────────────────────────────

function updateProfile(userUid, updates) {
    const user = stmts.getUserByUid.get(userUid);
    if (!user) return { success: false, error: 'User not found' };

    stmts.updateUserProfile.run({
        user_uid: userUid,
        display_name: updates.display_name || user.display_name,
        age: Math.max(1, Math.min(120, parseInt(updates.age) || user.age)),
        preferred_genres: JSON.stringify(updates.preferred_genres || JSON.parse(user.preferred_genres || '[]')),
        preferred_experience: updates.preferred_experience || user.preferred_experience,
        avatar_emoji: updates.avatar_emoji || user.avatar_emoji
    });

    return {
        success: true,
        user: sanitizeUser(stmts.getUserByUid.get(userUid))
    };
}

// ──────────────────────────────────
// HELPERS
// ──────────────────────────────────

function sanitizeUser(user) {
    if (!user) return null;
    const { password_hash, ...safe } = user;
    return safe;
}

module.exports = {
    register,
    login,
    verifyToken,
    authMiddleware,
    optionalAuth,
    updateProfile,
    sanitizeUser,
    AVATARS
};
