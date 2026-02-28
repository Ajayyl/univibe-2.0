// UniVibe — Age Gate Modal (Profile Selection)

function renderAgeGate() {
  return `
    <div class="age-gate-overlay" id="age-gate">
      <div class="age-gate-card">
        <div class="gate-icon">🎬</div>
        <h2>Who is watching?</h2>
        <p>Select your profile to personalize recommendations</p>
        
        <div class="profile-grid">
          <button class="profile-card" onclick="selectProfile(9)">
            <div class="profile-emoji">🎈</div>
            <div class="profile-label">Kids</div>
            <span class="profile-desc">Safe for all ages</span>
          </button>
          
          <button class="profile-card" onclick="selectProfile(15)">
            <div class="profile-emoji">🍿</div>
            <div class="profile-label">Teen</div>
            <span class="profile-desc">PG-13 content</span>
          </button>
          
          <button class="profile-card" onclick="selectProfile(18)">
            <div class="profile-emoji">🔞</div>
            <div class="profile-label">Adult</div>
            <span class="profile-desc">Unrestricted</span>
          </button>
        </div>
        
        <p style="font-size: 12px; opacity: 0.5; margin-top: 12px;">
          This helps us filter content appropriate for you.
        </p>
      </div>
    </div>
  `;
}

function selectProfile(age) {
  submitAge(age);
}

function submitAge(ageInput) {
  // If called without arg (e.g. from Enter key on hidden input), ignore or define fallback
  // But here we rely on button clicks.

  // Support legacy input if we ever revert or add manual override
  let age = ageInput;
  if (!age) {
    const input = document.getElementById('age-input');
    age = parseInt(input?.value);
  }

  if (!age || age < 1 || age > 120) {
    return;
  }

  localStorage.setItem('univibe_age', age);

  // Remove the gate
  const gate = document.getElementById('age-gate');
  if (gate) {
    gate.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => gate.remove(), 300);
  }

  // Update nav age badge
  updateNavAgeBadge();

  // Re-render current page
  Router.resolve();
}

function showAgeGate() {
  // Only show if no age is stored
  if (!localStorage.getItem('univibe_age')) {
    document.body.insertAdjacentHTML('beforeend', renderAgeGate());
  }
}

function resetAge() {
  localStorage.removeItem('univibe_age');
  location.reload();
}

function updateNavAgeBadge() {
  const badge = document.getElementById('nav-age-badge');
  if (badge) {
    const age = parseInt(localStorage.getItem('univibe_age'));
    if (age) {
      let label = 'Adult';
      if (age <= 12) label = 'Kids';
      else if (age <= 17) label = 'Teen';

      const isFiltered = age < 18;
      badge.innerHTML = `👤 ${label} Profile`;
      badge.title = 'Click to switch profile';
    }
  }
}
