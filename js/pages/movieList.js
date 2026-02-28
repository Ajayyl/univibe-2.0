// UniVibe — All Movies List Page
// Restores the original "Catalogue" functionality

function renderMovieList(params) {
  const userAge = parseInt(localStorage.getItem('univibe_age')) || 99;
  const safeMovies = applyAgeFilter(MOVIES, userAge);

  // Check for specific filter (e.g., "latest", "popular", "top-rated")
  if (params && params.filter) {
    let title = "Movies";
    let subtitle = "Explore our collection";
    let movies = [];

    switch (params.filter) {
      case 'latest':
        title = "🆕 Latest Movies";
        subtitle = "Newest additions to our catalogue";
        movies = getLatest(safeMovies);
        break;
      case 'popular':
        title = "🔥 Popular Movies";
        subtitle = "Trending right now";
        movies = getTrending(safeMovies);
        break;
      case 'top-rated':
        title = "⭐ Top Rated Movies";
        subtitle = "Highest rated by critics and audiences";
        movies = getTopRated(safeMovies);
        break;
      default:
        // Fallback to all safe sorted by title
        title = "All Movies";
        movies = safeMovies.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Render Grid View for Specific Filter
    return `
      <section class="section" style="padding-top: 100px; padding-bottom: 50px;">
        <div class="container">
          <div class="section-header">
            <div>
              <h2 class="section-title">${title}</h2>
              <p class="section-subtitle">${subtitle}</p>
            </div>
            <a href="#/all" class="btn btn-sm btn-outline">← Back to Categories</a>
          </div>
          
          <div class="movie-grid stagger">
            ${movies.map(m => renderMovieCard(m)).join('')}
          </div>
          
          ${movies.length === 0 ? `<p>No movies found for your age rating.</p>` : ''}
        </div>
      </section>
    `;
  }

  // --- Default: Category View ---

  // Helper to filter movies (reusable)
  const getMoviesByTag = (tag) => safeMovies.filter(m => m.tags && m.tags.includes(tag));
  const getMoviesByExperience = (exp) => safeMovies.filter(m => m.experience_type === exp);
  const getMoviesByGenre = (genre) => safeMovies.filter(m => m.genre && m.genre.includes(genre));

  // Define categories in order
  const categories = [
    { title: "Cult Classics", movies: getMoviesByTag('cult') },
    { title: "Underrated Gems", movies: getMoviesByTag('underrated') },
    { title: "Family Friendly", movies: getMoviesByTag('family-safe') },
    { title: "Adrenaline Rush", movies: getMoviesByExperience('intense') },
    { title: "Emotional Journey", movies: getMoviesByExperience('emotional') },
    { title: "Chill & Relax", movies: getMoviesByExperience('relaxing') },
    { title: "Animated Worlds", movies: getMoviesByGenre('Animation') },
    { title: "Sci-Fi Futures", movies: getMoviesByGenre('Sci-Fi') },
    { title: "Laugh Out Loud", movies: getMoviesByGenre('Comedy') },
    { title: "Action & Adventure", movies: [...new Set([...getMoviesByGenre('Action'), ...getMoviesByGenre('Adventure')])] }
  ].filter(cat => cat.movies.length > 0); // Only show categories with movies

  return `
    <section class="section" style="padding-top: 100px; padding-bottom: 50px;">
      <div class="container">
        <div class="section-header">
            <h2 class="section-title">Movie Library</h2>
            <p class="section-subtitle">Discover movies by mood, theme, and genre.</p>
        </div>

        ${categories.map(cat => `
          <div class="category-section" style="margin-bottom: 40px;">
            <h3 class="category-title" style="font-size: 1.5rem; margin-bottom: 15px; color: var(--text-color);">${cat.title}</h3>
            <div class="movie-row" style="
              display: flex;
              gap: 20px;
              overflow-x: auto;
              padding-bottom: 15px;
              scroll-behavior: smooth;
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            ">
              <style>
                .movie-row::-webkit-scrollbar { display: none; } /* Chrome, Safari, Opera */
              </style>
              ${cat.movies.map(m => `
                <div style="flex: 0 0 auto; width: 200px;">
                  ${renderMovieCard(m)}
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}

        ${categories.length === 0 ? `<p>No movies found for your age rating.</p>` : ''}
      </div>
    </section>
  `;
}
