// UniVibe — Hash-based SPA Router

const Router = {
    routes: {},
    currentRoute: null,

    /**
     * Register a route handler.
     * Pattern can include params, e.g. '/movie/:id'
     */
    on(pattern, handler) {
        this.routes[pattern] = handler;
    },

    /**
     * Navigate to a given hash route.
     */
    navigate(path) {
        window.location.hash = '#' + path;
    },

    /**
     * Match current hash against registered routes.
     */
    resolve() {
        const hash = window.location.hash.slice(1) || '/';
        this.currentRoute = hash;

        for (const pattern in this.routes) {
            const params = this._matchRoute(pattern, hash);
            if (params !== null) {
                this.routes[pattern](params);
                return;
            }
        }

        // Fallback: go home
        this.routes['/'] && this.routes['/']({});
    },

    /**
     * Match a route pattern against a path.
     * Returns params object or null.
     */
    _matchRoute(pattern, path) {
        const patternParts = pattern.split('/').filter(Boolean);
        const pathParts = path.split('/').filter(Boolean);

        if (patternParts.length !== pathParts.length) return null;

        const params = {};
        for (let i = 0; i < patternParts.length; i++) {
            if (patternParts[i].startsWith(':')) {
                params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
            } else if (patternParts[i] !== pathParts[i]) {
                return null;
            }
        }
        return params;
    },

    /**
     * Initialize the router.
     */
    init() {
        window.addEventListener('hashchange', () => this.resolve());
        this.resolve();
    }
};
