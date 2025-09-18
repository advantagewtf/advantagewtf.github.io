// OMDb API configuration
const OMDB_API_KEY = 'afcd4c24';
const OMDB_BASE_URL = 'https://www.omdbapi.com/';

// Sample movie data with popular movies
const movieData = {
    featured: [
        
        {
            id: "tt0111161",
            title: "The Shawshank Redemption",
            year: 1994,
            rating: 4.8,
            views: "15.2M",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            imdbID: "tt0111161",
            type: "movie"
        },
        {
            id: "tt0468569",
            title: "The Dark Knight",
            year: 2008,
            rating: 4.6,
            views: "18.5M",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbID: "tt0468569",
            type: "movie"
        },
        {
            id: "tt1375666",
            title: "Inception",
            year: 2010,
            rating: 4.4,
            views: "17.3M",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            imdbID: "tt1375666",
            type: "movie"
        },
        {
            id: "tt0133093",
            title: "The Matrix",
            year: 1999,
            rating: 4.2,
            views: "13.7M",
            description: "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00NDJjLTk4NDItYTRmY2EwMWI5MTktXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            imdbID: "tt0133093",
            type: "movie"
        },
        {
            id: "tt0816692",
            title: "Interstellar",
            year: 2014,
            rating: 4.3,
            views: "14.6M",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            imdbID: "tt0816692",
            type: "movie"
        },
        {
            id: "tt0120737",
            title: "The Lord of the Rings: The Fellowship of the Ring",
            year: 2001,
            rating: 4.4,
            views: "15.1M",
            description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
            poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ1MjY@._V1_SX300.jpg",
            imdbID: "tt0120737",
            type: "movie"
        }
    ],
    trending: [
        {
            id: "tt31090746", title:
                "Never Kill a Femboy on the First Date",
            year: 67,
            rating: 11,
            views: "67",
            description: "An Asian-Irish cross-dresser's bold plans to seduce a closeted GAA player take a risky turn when three lads watch them having sex from afar."
            ,poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.6vO1G88fMibPusY2z2ARlQHaKe%3Fpid%3DApi&f=1&ipt=cbb2f226d6d4d57f6ea69ebe2597b12b921992802a0e7652c564a1b48a9dea48&ipo=images",
            imdbID: "tt31090746",
            type: "movie"

        },
        {
            id: "tt0111161",
            title: "The Shawshank Redemption",
            year: 1994,
            rating: 4.8,
            views: "15.2M",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            imdbID: "tt0111161",
            type: "movie"
        },
        {
            id: "tt0068646",
            title: "The Godfather",
            year: 1972,
            rating: 4.7,
            views: "12.8M",
            description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00NDJjLTk4NDItYTRmY2EwMWI5MTktXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            imdbID: "tt0068646",
            type: "movie"
        },
        {
            id: "tt0468569",
            title: "The Dark Knight",
            year: 2008,
            rating: 4.6,
            views: "18.5M",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbID: "tt0468569",
            type: "movie"
        },
        {
            id: "tt0050083",
            title: "12 Angry Men",
            year: 1957,
            rating: 4.5,
            views: "8.9M",
            description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNWUzMi00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
            imdbID: "tt0050083",
            type: "movie"
        },
        {
            id: "tt0108052",
            title: "Schindler's List",
            year: 1993,
            rating: 4.7,
            views: "11.3M",
            description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ1MjY@._V1_SX300.jpg",
            imdbID: "tt0108052",
            type: "movie"
        }
    ],
    topRated: [
        {
            id: "tt0167260",
            title: "The Lord of the Rings: The Return of the King",
            year: 2003,
            rating: 4.6,
            views: "14.7M",
            description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWI5MTktXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            imdbID: "tt0167260",
            type: "movie"
        },
        {
            id: "tt0110912",
            title: "Pulp Fiction",
            year: 1994,
            rating: 4.5,
            views: "13.2M",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItY2ViMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            imdbID: "tt0110912",
            type: "movie"
        },
        {
            id: "tt0167261",
            title: "The Lord of the Rings: The Two Towers",
            year: 2002,
            rating: 4.4,
            views: "12.9M",
            description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            imdbID: "tt0167261",
            type: "movie"
        },
        {
            id: "tt0120737",
            title: "The Lord of the Rings: The Fellowship of the Ring",
            year: 2001,
            rating: 4.4,
            views: "15.1M",
            description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
            poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ1MjY@._V1_SX300.jpg",
            imdbID: "tt0120737",
            type: "movie"
        },
        {
            id: "tt0109830",
            title: "Forrest Gump",
            year: 1994,
            rating: 4.3,
            views: "16.8M",
            description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
            poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            imdbID: "tt0109830",
            type: "movie"
        }
    ],

};

// Global variables
let currentHeroSlide = 0;
let heroInterval;
let currentMovie = null;
let isPlaying = false;
let currentMedia = {
    imdbID: '',
    title: '',
    year: '',
    type: ''
};
let allMovies = {}; // Store all movies for filtering

// Local storage keys
const STORAGE_KEYS = {
    likes: 'CLOUDMOVIES_likes',
    dislikes: 'CLOUDMOVIES_dislikes',
    watchLater: 'CLOUDMOVIES_watch_later',
    continueWatching: 'CLOUDMOVIES_continue_watching',
    watchHistory: 'CLOUDMOVIES_watch_history'
};

// DOM elements
const elements = {
    heroCarousel: document.getElementById('heroCarousel'),
    searchBtn: document.getElementById('searchBtn'),
    searchOverlay: document.getElementById('searchOverlay'),
    searchInput: document.getElementById('searchInput'),
    searchClose: document.getElementById('searchClose'),
    suggestions: document.getElementById('suggestions'),
    movieModal: document.getElementById('movieModal'),
    closeModal: document.getElementById('closeModal'),
    playBtn: document.getElementById('playBtn'), // Main play button in modal hero
    videoPlayer: document.getElementById('videoPlayer'),
    backBtn: document.getElementById('backBtn'),
    embedPlayer: document.getElementById('embedPlayer'),
    navbar: document.querySelector('.navbar'),
    trendingRow: document.getElementById('trendingRow'),
    topRatedRow: document.getElementById('topRatedRow'),

    continueWatchingSection: document.getElementById('continueWatchingSection'),
    continueWatchingRow: document.getElementById('continueWatchingRow'),
    genresDropdown: document.getElementById('genresDropdown'),
    genresDropdownContent: document.getElementById('genresDropdownContent'),
    accountDropdown: document.getElementById('accountDropdown'),
    accountDropdownContent: document.getElementById('accountDropdownContent'),
    myFavoritesPage: document.getElementById('myFavoritesPage'),
    watchLaterPage: document.getElementById('watchLaterPage'),
    watchHistoryPage: document.getElementById('watchHistoryPage'),
    favoritesGrid: document.getElementById('favoritesGrid'),
    watchLaterGrid: document.getElementById('watchLaterGrid'),
    historyGrid: document.getElementById('historyGrid'),
    favoritesBackBtn: document.getElementById('favoritesBackBtn'),
    watchLaterBackBtn: document.getElementById('watchLaterBackBtn'),
    historyBackBtn: document.getElementById('historyBackBtn'),
    seasonSelect: document.getElementById('seasonSelect'), // Added seasonSelect to elements
    likeBtn: document.getElementById('likeBtn'), // Added to elements
    dislikeBtn: document.getElementById('dislikeBtn'), // Added to elements
    watchLaterBtn: document.getElementById('watchLaterBtn'), // Added to elements
    trailerBtn: document.getElementById('trailerBtn'), // Added to elements
    shareBtn: document.getElementById('shareBtn'), // Added to elements
    // Footer pages
    statusBtn: document.getElementById('statusBtn'),
    aboutBtn: document.getElementById('aboutBtn'),
    statusPage: document.getElementById('statusPage'),
    aboutPage: document.getElementById('aboutPage'),
    statusBackBtn: document.getElementById('statusBackBtn'),
    aboutBackBtn: document.getElementById('aboutBackBtn'),
    statusLastUpdated: document.getElementById('statusLastUpdated')
};

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();

    populateMovieRows();
    updateContinueWatchingSection();

    // Store all movies for filtering
    allMovies = {
        trending: movieData.trending,
        topRated: movieData.topRated,

    };
}

function setupEventListeners() {
    // Navigation
    if (elements.searchBtn) elements.searchBtn.addEventListener('click', toggleSearch);
    if (elements.searchClose) elements.searchClose.addEventListener('click', toggleSearch);
    if (elements.searchInput) elements.searchInput.addEventListener('input', handleSearch);

    // Mobile navigation
    const navHome = document.getElementById('navHome');
    const navMovies = document.getElementById('navMovies');
    const navSearch = document.getElementById('navSearch');
    const navAccount = document.getElementById('navAccount');

    if (navHome) {
        navHome.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveNavItem('navHome');
            closePage();
            closeModal();
            closeMobileDropdown();
        });
    }

    if (navMovies) {
        navMovies.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveNavItem('navMovies');
            closePage();
            closeModal();
            closeMobileDropdown();
            // Show all movies or filter by movies
            resetToOriginalMovies();
        });
    }

    if (navSearch) {
        navSearch.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveNavItem('navSearch');
            closePage();
            closeModal();
            closeMobileDropdown();
            toggleSearch();
        });
    }

    if (navAccount) {
        navAccount.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveNavItem('navAccount');
            toggleAccountDropdownMobile();
        });
    }

    // Dropdown menus
    if (elements.genresDropdown) {
        elements.genresDropdown.addEventListener('click', (e) => {
            e.preventDefault();
            toggleDropdown('genresDropdownContent');
        });
    }

    if (elements.accountDropdown) {
        elements.accountDropdown.addEventListener('click', (e) => {
            e.preventDefault();
            toggleDropdown('accountDropdownContent');
        });
    }

    // Genre selection
    if (elements.genresDropdownContent) {
        elements.genresDropdownContent.addEventListener('click', (e) => {
            if (e.target.dataset.genre) {
                e.preventDefault();
                filterByGenre(e.target.dataset.genre);
                closeDropdowns();
            }
        });
    }

    // Modal
    if (elements.closeModal) elements.closeModal.addEventListener('click', closeModal);
    if (elements.movieModal) {
        elements.movieModal.addEventListener('click', (e) => {
            if (e.target === elements.movieModal) closeModal();
        });
    }

    // Video player's back button
    if (elements.backBtn) elements.backBtn.addEventListener('click', closeVideoPlayer);




    // Live Shows link
    const liveShowsLink = document.getElementById('liveShowsLink');
    if (liveShowsLink) {
        liveShowsLink.addEventListener('click', (e) => {
            e.preventDefault();
            filterByTVShows();
            closeDropdowns();
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            closeDropdowns();
        }
        if (!e.target.closest('.search-container')) {
            clearSuggestions();
        }
    });

    // Close search/modals/pages on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (elements.searchOverlay.classList.contains('active')) {
                toggleSearch();
            } else if (elements.movieModal.classList.contains('active')) {
                closeModal();
            } else if (elements.videoPlayer.classList.contains('active')) {
                closeVideoPlayer();
            } else if (document.querySelector('.page-overlay.active')) {
                closePage();
            } else {
                closeDropdowns();
            }
        }
    });
}

function setActiveNavItem(activeId) {
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.mobile-bottom-nav a');
    navItems.forEach(item => item.classList.remove('active'));

    // Add active class to selected item
    const activeItem = document.getElementById(activeId);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Add new function for mobile account dropdown

// Search functionality with OMDb API
async function handleSearch(e) {
    const query = e.target.value.trim();
    if (query.length < 3) {
        clearSuggestions();
        return;
    }

    try {
        const response = await fetch(`${OMDB_BASE_URL}?s=${encodeURIComponent(query)}&apikey=${OMDB_API_KEY}`);
        const data = await response.json();

        if (data.Response === 'True') {
            displaySearchSuggestions(data.Search.slice(0, 8)); // Limit to 8 results
        } else {
            clearSuggestions();
        }
    } catch (error) {
        console.error('Search error:', error);
        clearSuggestions();
    }
}

function displaySearchSuggestions(results) {
    const suggestionsDiv = elements.suggestions;
    suggestionsDiv.innerHTML = '';

    results.forEach(item => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';

        const poster = item.Poster !== 'N/A' ? item.Poster : 'no-image-thumbnail.png';

        suggestionItem.innerHTML = `
                    <img src="${poster}" alt="${item.Title}" onerror="this.src='no-image-thumbnail.png'">
                    <div class="suggestion-info">
                        <div class="suggestion-title">${item.Title}</div>
                        <div class="suggestion-meta">${item.Year} • ${item.Type}</div>
                    </div>
                `;

        suggestionItem.addEventListener('click', () => selectSearchResult(item));
        suggestionsDiv.appendChild(suggestionItem);
    });
}

function clearSuggestions() {
    elements.suggestions.innerHTML = '';
}

function toggleDropdown(dropdownId) {
    closeDropdowns();
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.add('active');
}

function closeDropdowns() {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
}

async function filterByGenre(genre) {
    console.log('Filtering by genre:', genre);

    // Show loading state
    const sections = ['trending', 'topRated'];
    sections.forEach(section => {
        const container = document.getElementById(section + 'Row');
        container.innerHTML = '<div style="color: #fff; padding: 2rem; text-align: center;">Loading...</div>';
    });

    try {
        const genreQueries = {
            'action': 'action',
            'comedy': 'comedy',
            'drama': 'drama',
            'horror': 'horror',
            'romance': 'romance',
            'thriller': 'thriller',
            'sci-fi': 'science fiction',
            'documentary': 'documentary'
        };

        const searchQuery = genreQueries[genre] || genre;
        const response = await fetch(`${OMDB_BASE_URL}?s=${encodeURIComponent(searchQuery)}&type=movie&apikey=${OMDB_API_KEY}`);
        const data = await response.json();

        if (data.Response === 'True') {
            const moviePromises = data.Search.slice(0, 15).map(async (movie) => {
                try {
                    const detailResponse = await fetch(`${OMDB_BASE_URL}?i=${movie.imdbID}&apikey=${OMDB_API_KEY}`);
                    const details = await detailResponse.json();

                    if (details.Response === 'True') {
                        return {
                            id: movie.imdbID,
                            title: details.Title,
                            year: details.Year,
                            rating: details.imdbRating !== 'N/A' ? parseFloat(details.imdbRating) / 2 : 4.0,
                            views: `${Math.floor(Math.random() * 10) + 1}.${Math.floor(Math.random() * 10)}M`,
                            description: details.Plot !== 'N/A' ? details.Plot : 'No description available.',
                            poster: details.Poster !== 'N/A' ? details.Poster : 'no-image-thumbnail.png',
                            imdbID: movie.imdbID,
                            type: movie.Type,
                            genre: details.Genre
                        };
                    }
                } catch (error) {
                    console.error('Error fetching movie details:', error);
                    return null;
                }
            });

            const movies = (await Promise.all(moviePromises)).filter(movie => movie !== null);

            const genreTitles = {
                'action': { title: 'Action Movies', description: 'Explosive adventures and thrilling action sequences' },
                'comedy': { title: 'Comedy Movies', description: 'Hilarious films to brighten your day' },
                'drama': { title: 'Drama Movies', description: 'Compelling stories that touch the heart' },
                'horror': { title: 'Horror Movies', description: 'Spine-chilling thrills and supernatural scares' },
                'romance': { title: 'Romance Movies', description: 'Love stories that warm the heart' },
                'thriller': { title: 'Thriller Movies', description: 'Edge-of-your-seat suspense and mystery' },
                'sci-fi': { title: 'Sci-Fi Movies', description: 'Futuristic adventures and scientific wonders' },
                'documentary': { title: 'Documentary Movies', description: 'Real stories and educational content' }
            };

            const genreInfo = genreTitles[genre] || { title: `${genre.charAt(0).toUpperCase() + genre.slice(1)} Movies`, description: 'Curated selection of movies' };

            document.querySelector('#trendingRow').previousElementSibling.innerHTML = `
                        <h2>${genreInfo.title}</h2>
                        <p style="color: #cccccc; font-size: 0.9rem; margin-top: -1rem; margin-bottom: 1rem;">${genreInfo.description}</p>
                    `;

            const trending = movies.slice(0, 5);
            const topRated = movies.slice(5, 10);


            populateMovieRow(elements.trendingRow, trending);
            populateMovieRow(elements.topRatedRow, topRated);


        } else {
            // Fallback to original movies if no results
            resetToOriginalMovies();
        }
    } catch (error) {
        console.error('Error filtering by genre:', error);
        resetToOriginalMovies();
    }
}

function resetToOriginalMovies() {
    // Reset section titles
    const sections = document.querySelectorAll('.content-section');
    // Assuming the first three are Trending, Top Rated, Recently Added
    if (sections[0]) {
        sections[0].querySelector('h2').textContent = 'Trending Now';
        const p1 = sections[0].querySelector('p');
        if (p1) p1.remove();
    }
    if (sections[1]) sections[1].querySelector('h2').textContent = 'Top Rated';


    populateMovieRow(elements.trendingRow, allMovies.trending);
    populateMovieRow(elements.topRatedRow, allMovies.topRated);

}

async function filterByTVShows() {
    console.log('Filtering by TV Shows');

    // Show loading state
    const sections = ['trending', 'topRated'];
    sections.forEach(section => {
        const container = document.getElementById(section + 'Row');
        container.innerHTML = '<div style="color: #fff; padding: 2rem; text-align: center;">Loading TV Shows...</div>';
    });

    try {
        // Search for popular TV series
        const tvQueries = ['Breaking Bad', 'Game of Thrones', 'The Office', 'Stranger Things', 'Friends', 'The Crown', 'Narcos', 'Sherlock', 'House of Cards', 'Westworld', 'The Walking Dead', 'Lost', 'Prison Break', 'Dexter', 'How I Met Your Mother'];

        const moviePromises = tvQueries.map(async (query) => {
            try {
                const response = await fetch(`${OMDB_BASE_URL}?s=${encodeURIComponent(query)}&type=series&apikey=${OMDB_API_KEY}`);
                const data = await response.json();

                if (data.Response === 'True' && data.Search && data.Search.length > 0) {
                    const series = data.Search[0]; // Take first result
                    const detailResponse = await fetch(`${OMDB_BASE_URL}?i=${series.imdbID}&apikey=${OMDB_API_KEY}`);
                    const details = await detailResponse.json();

                    if (details.Response === 'True') {
                        return {
                            id: series.imdbID,
                            title: details.Title,
                            year: details.Year,
                            rating: details.imdbRating !== 'N/A' ? parseFloat(details.imdbRating) / 2 : 4.0,
                            views: `${Math.floor(Math.random() * 10) + 1}.${Math.floor(Math.random() * 10)}M`,
                            description: details.Plot !== 'N/A' ? details.Plot : 'No description available.',
                            poster: details.Poster !== 'N/A' ? details.Poster : 'no-image-thumbnail.png',
                            imdbID: series.imdbID,
                            type: 'series',
                            genre: details.Genre || 'Unknown'
                        };
                    }
                }
            } catch (error) {
                console.error('Error fetching TV show details:', error);
                return null;
            }
        });

        const tvShows = (await Promise.all(moviePromises)).filter(show => show !== null);

        if (tvShows.length > 0) {
            // Update section titles
            document.querySelector('#trendingRow').previousElementSibling.innerHTML = `
                        <h2>Popular TV Shows</h2>
                        <p style="color: #cccccc; font-size: 0.9rem; margin-top: -1rem; margin-bottom: 1rem;">Binge-worthy series you can't miss</p>
                    `;

            const trending = tvShows.slice(0, 5);
            const topRated = tvShows.slice(5, 10);


            populateMovieRow(elements.trendingRow, trending);
            populateMovieRow(elements.topRatedRow, topRated);


        } else {
            // Fallback to original movies if no results
            resetToOriginalMovies();
        }
    } catch (error) {
        console.error('Error filtering TV shows:', error);
        resetToOriginalMovies();
    }
}


function closeAccountSettings() {
    const modal = document.getElementById('accountSettingsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}




function handleScroll() {
    // Remove scroll effect since Tubi has solid navbar
}

function toggleSearch() {
    elements.searchOverlay.classList.toggle('active');
    if (elements.searchOverlay.classList.contains('active')) {
        elements.searchInput.focus();
    } else {
        elements.searchInput.value = '';
        clearSuggestions();
    }
}

function createHeroCarousel() {
    elements.heroCarousel.innerHTML = '';

    movieData.featured.forEach((movie, index) => {
        const slide = document.createElement('div');
        slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <div class="hero-overlay">
                        <div class="hero-content">
                            <h2>${movie.title}</h2>
                            <p>${movie.description}</p>
                        </div>
                    </div>
                `;
        slide.addEventListener('click', () => openMovieModal(movie));
        elements.heroCarousel.appendChild(slide);
    });
}

function startHeroCarousel() {
    heroInterval = setInterval(() => {
        changeHeroSlide(1);
    }, 6000);
}

function changeHeroSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    slides[currentHeroSlide].classList.remove('active');

    currentHeroSlide += direction;
    if (currentHeroSlide >= slides.length) currentHeroSlide = 0;
    if (currentHeroSlide < 0) currentHeroSlide = slides.length - 1;

    slides[currentHeroSlide].classList.add('active');
}

function populateMovieRows() {
    populateMovieRow(elements.trendingRow, movieData.trending);
    populateMovieRow(elements.topRatedRow, movieData.topRated);

}

function populateMovieRow(container, movies) {
    container.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
    });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const continueWatching = getContinueWatchingData();
    const progress = continueWatching[movie.id]?.progress || 0;

    // Use no-image-thumbnail if poster is missing or N/A
    const posterSrc = movie.poster && movie.poster !== 'N/A'
        ? movie.poster
        : 'no-image-thumbnail.png';

    card.innerHTML = `
                <div class="movie-poster">
                    <img src="${posterSrc}" alt="${movie.title}" onerror="this.src='no-image-thumbnail.png'">
                    ${progress > 0 ? `<div class="progress-indicator" style="width: ${progress}%"></div>` : ''}
                </div>
                <div class="movie-info">
                    <div class="movie-title">${movie.title}</div>
                    <div class="movie-meta">
                        <div class="rating">
                            <div class="stars">${generateStars(movie.rating)}</div>
                            <span class="rating-text">${movie.rating}</span>
                        </div>
                        <div class="views">${movie.views} views</div>
                    </div>
                </div>
            `;

    card.addEventListener('click', () => openMovieModal(movie));

    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star star"></i>';
    }

    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt star"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star star"></i>';
    }

    return starsHtml;
}

function openMovieModal(movie) {
    currentMovie = movie;
    currentMedia = {
        imdbID: movie.imdbID,
        title: movie.title,
        year: movie.year,
        type: movie.type || 'movie'
    };

    // Update modal content with fallback for missing images
    const posterSrc = movie.poster && movie.poster !== 'N/A' ? movie.poster : 'no-image-thumbnail.png';
    const backdropSrc = movie.poster && movie.poster !== 'N/A' ? movie.poster : 'no-image-thumbnail.png';

    document.getElementById('modalPoster').src = posterSrc;
    document.getElementById('modalPoster').onerror = function () { this.src = 'no-image-thumbnail.png'; };

    document.getElementById('modalBackdrop').src = backdropSrc;
    document.getElementById('modalBackdrop').onerror = function () { this.src = 'no-image-thumbnail.png'; };

    // Update additional details


    // Show/hide episodes section for TV shows
    const episodesSection = document.getElementById('episodesSection');
    if (movie.type === 'series') {
        episodesSection.style.display = 'block';
        // Reset season select to 1 when opening modal for a series
        if (elements.seasonSelect) {
            elements.seasonSelect.value = '1';
        }
        populateEpisodes(movie);
    } else {
        episodesSection.style.display = 'none';
    }

    // Set up and update action buttons
    setupActionButtons(movie); // Attach listeners

    // Show modal
    elements.movieModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    elements.movieModal.classList.remove('active');
    document.body.style.overflow = '';
}

function setupActionButtons(movie) {
    // Remove existing listeners to prevent duplicates
    const playBtn = document.getElementById('playBtn');


    // Update elements object references
    elements.playBtn = playBtn;


    // Remove existing event listeners by cloning nodes
    if (playBtn) {
        const newPlayBtn = playBtn.cloneNode(true);
        playBtn.parentNode.replaceChild(newPlayBtn, playBtn);
        elements.playBtn = newPlayBtn;
        newPlayBtn.addEventListener('click', () => openVideoPlayer(movie));
    }

}


function populateEpisodes(movie) {
    const episodesGrid = document.getElementById('episodesGrid');
    episodesGrid.innerHTML = '';

    // Generate sample episodes for demonstration
    // Using no-image-thumbnail if movie.poster is not available
    const episodeThumbnailSrc = movie.poster && movie.poster !== 'N/A' ? movie.poster : 'no-image-thumbnail.png';

    const episodes = [
        { number: 1, title: 'Pilot Episode', description: 'The beginning of an incredible journey...', duration: '45m' },
        { number: 2, title: 'The Plot Thickens', description: 'New mysteries emerge as our heroes face unexpected challenges...', duration: '42m' },
        { number: 3, title: 'Revelations', description: 'Shocking truths come to light in this gripping episode...', duration: '48m' },
        { number: 4, title: 'Point of No Return', description: 'Everything changes as the stakes reach new heights...', duration: '44m' },
        { number: 5, title: 'The Reckoning', description: 'The climactic episode that will leave you breathless...', duration: '52m' },
        { number: 6, title: 'New Beginnings', description: 'As one chapter ends, another begins with new possibilities...', duration: '46m' }
    ];

    episodes.forEach(episode => {
        const episodeCard = document.createElement('div');
        episodeCard.className = 'episode-card';

        episodeCard.innerHTML = `
                    <div class="episode-thumbnail">
                        <img src="${episodeThumbnailSrc}" alt="Episode ${episode.number}" onerror="this.src='no-image-thumbnail.png';" style="filter: brightness(0.7);">
                        <button class="episode-play-btn">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                    <div class="episode-info">
                        <div class="episode-number">Episode ${episode.number}</div>
                        <div class="episode-title">${episode.title}</div>
                        <div class="episode-description">${episode.description}</div>
                        <div class="episode-duration">${episode.duration}</div>
                    </div>
                `;

        // Pass the current movie object to playEpisode for context
        episodeCard.addEventListener('click', () => playEpisode(movie, episode.number));
        episodesGrid.appendChild(episodeCard);
    });
}

function playTrailer(movie) {
    // For now, playing the trailer is the same as playing the movie
    openVideoPlayer(movie);
}

function shareMovie(movie) {
    if (navigator.share) {
        navigator.share({
            title: movie.title,
            text: `Check out ${movie.title} on CLOUDMOVIES!`,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        const url = `${window.location.origin}/?movie=${movie.imdbID}`;
        navigator.clipboard.writeText(url).then(() => {
            alert('Movie link copied to clipboard!');
        }).catch(() => {
            // If clipboard API fails, show a prompt with the URL
            prompt('Copy this link:', url);
        });
    }
}

function playEpisode(movie, episodeNumber) {
    // Pass the movie object and episode number to openVideoPlayer
    openVideoPlayer(movie, episodeNumber);
}

function openVideoPlayer(movie, episodeNumber = null) {
    if (!movie || !movie.imdbID) {
        console.error("Cannot play: movie object or imdbID is missing.");
        return;
    }

    const videoPlayerOverlay = elements.videoPlayer; // Use elements object
    videoPlayerOverlay.style.opacity = '1';
    videoPlayerOverlay.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';

    let embedLink;
    const seasonNumber = elements.seasonSelect ? elements.seasonSelect.value : '1'; // Ensure seasonSelect is accessed correctly

    if (movie.type === 'series' && episodeNumber) {
        embedLink = `https://moviekex.online/embed/tv/${movie.imdbID}/${seasonNumber}/${episodeNumber}`;
    } else if (movie.type === 'series') {
        // Default to season 1, episode 1 if playing a series without specific episode
        embedLink = `https://moviekex.online/embed/tv/${movie.imdbID}/${seasonNumber}/1`;
    } else {
        embedLink = `https://moviekex.online/embed/movie/${movie.imdbID}`;
    }

    elements.embedPlayer.innerHTML = `
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="${embedLink}" 
                    frameborder="0" 
                    allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
            `;

    // Add to continue watching and watch history
    addToContinueWatching(movie);
    addToWatchHistory(movie);

    // Close the modal when opening video player
    closeModal();
}

function closeVideoPlayer() {
    const videoPlayerOverlay = elements.videoPlayer; // Use elements object
    videoPlayerOverlay.style.opacity = '0';
    videoPlayerOverlay.style.visibility = 'hidden';
    document.body.style.overflow = '';

    // Clear the embed
    elements.embedPlayer.innerHTML = '';
}

function showAdblockWarning() {
    const warning = document.getElementById('adblockWarning');
    if (warning) {
        warning.style.display = 'block';
        setTimeout(() => {
            warning.style.display = 'none';
        }, 5000); // Auto-dismiss after 5 seconds
    }
}

function dismissAdblockWarning() {
    const warning = document.getElementById('adblockWarning');
    if (warning) {
        warning.style.display = 'none';
    }
}

// Local Storage Functions
function getLikedMovies() {
    const likes = localStorage.getItem(STORAGE_KEYS.likes);
    return likes ? JSON.parse(likes) : [];
}

function getDislikedMovies() {
    const dislikes = localStorage.getItem(STORAGE_KEYS.dislikes);
    return dislikes ? JSON.parse(dislikes) : [];
}

function getWatchLaterMovies() {
    const watchLater = localStorage.getItem(STORAGE_KEYS.watchLater);
    return watchLater ? JSON.parse(watchLater) : [];
}

function getContinueWatchingData() {
    const continueWatching = localStorage.getItem(STORAGE_KEYS.continueWatching);
    return continueWatching ? JSON.parse(continueWatching) : {};
}

function getWatchHistoryData() {
    const watchHistory = localStorage.getItem(STORAGE_KEYS.watchHistory);
    return watchHistory ? JSON.parse(watchHistory) : {};
}

function addToWatchHistory(movie) {
    const watchHistory = getWatchHistoryData();
    watchHistory[movie.id] = {
        movie: movie,
        timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEYS.watchHistory, JSON.stringify(watchHistory));
}





function addToContinueWatching(movie) {
    const continueWatching = getContinueWatchingData();
    continueWatching[movie.id] = {
        movie: movie,
        timestamp: Date.now(),
        progress: 0
    };
    localStorage.setItem(STORAGE_KEYS.continueWatching, JSON.stringify(continueWatching));
    updateContinueWatchingSection();
}

function updateContinueWatchingProgress(movieId, progress) {
    const continueWatching = getContinueWatchingData();
    if (continueWatching[movieId]) {
        continueWatching[movieId].progress = progress;
        continueWatching[movieId].timestamp = Date.now();
        localStorage.setItem(STORAGE_KEYS.continueWatching, JSON.stringify(continueWatching));
    }
}

function updateContinueWatchingSection() {
    const continueWatchingData = getContinueWatchingData();
    const continueWatchingMovies = Object.values(continueWatchingData)
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 10)
        .map(item => item.movie);

    if (continueWatchingMovies.length > 0) {
        elements.continueWatchingSection.style.display = 'block';
        populateMovieRow(elements.continueWatchingRow, continueWatchingMovies);
    } else {
        elements.continueWatchingSection.style.display = 'none';
    }
}

// Page Functions
function openMyFavorites() {
    const likes = getLikedMovies();
    const allMoviesFlat = [...movieData.trending, ...movieData.topRated];
    const favoriteMovies = allMoviesFlat.filter(movie => likes.includes(movie.id));

    populateMoviesGrid(elements.favoritesGrid, favoriteMovies, 'No favorites yet', 'Start liking movies to see them here!');
    elements.myFavoritesPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openWatchLater() {
    const watchLaterMovies = getWatchLaterMovies();
    populateMoviesGrid(elements.watchLaterGrid, watchLaterMovies, 'No movies saved for later', 'Save movies to watch them later!');
    elements.watchLaterPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openWatchHistory() {
    const historyData = getWatchHistoryData();
    const historyMovies = Object.values(historyData)
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(item => ({
            ...item.movie,
            watchedAt: new Date(item.timestamp).toLocaleDateString()
        }));

    populateMoviesGrid(elements.historyGrid, historyMovies, 'No watch history', 'Movies you watch will appear here!');
    elements.watchHistoryPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePage() {
    document.querySelectorAll('.page-overlay').forEach(page => {
        page.classList.remove('active');
    });
    document.body.style.overflow = '';
}

function populateMoviesGrid(container, movies, emptyTitle, emptyMessage) {
    container.innerHTML = '';

    if (movies.length === 0) {
        container.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-film"></i>
                        <h3>${emptyTitle}</h3>
                        <p>${emptyMessage}</p>
                    </div>
                `;
        return;
    }

    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
    });
}

// Touch support for mobile
let startX = 0;
let isScrolling = false;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    if (!startX) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50 && !isScrolling) {
        const movieRows = document.querySelectorAll('.movie-row');
        movieRows.forEach(row => {
            if (diffX > 0) {
                row.scrollLeft += 200;
            } else {
                row.scrollLeft -= 200;
            }
        });
    }
}, { passive: true });

document.addEventListener('touchend', () => {
    startX = 0;
    isScrolling = false;
}, { passive: true });

async function selectSearchResult(item) {
    try {
        // Fetch detailed information from OMDb
        const response = await fetch(`${OMDB_BASE_URL}?i=${item.imdbID}&apikey=${OMDB_API_KEY}`);
        const details = await response.json();

        if (details.Response === 'True') {
            const movie = {
                id: item.imdbID,
                title: details.Title,
                year: details.Year,
                rating: details.imdbRating !== 'N/A' ? parseFloat(details.imdbRating) / 2 : 4.0,
                views: `${Math.floor(Math.random() * 10) + 1}.${Math.floor(Math.random() * 10)}M`,
                description: details.Plot !== 'N/A' ? details.Plot : 'No description available.',
                poster: details.Poster !== 'N/A' ? details.Poster : 'no-image-thumbnail.png',
                imdbID: item.imdbID,
                type: item.Type || 'movie',
                genre: details.Genre || 'Unknown'
            };

            // Close search and open movie modal
            toggleSearch();
            openMovieModal(movie);
        } else {
            console.error('Failed to fetch movie details');
        }
    } catch (error) {
        console.error('Error selecting search result:', error);
    }
}

function openStatusPage() {
    const now = new Date();
    elements.statusLastUpdated.textContent = now.toLocaleString();
    elements.statusPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openAboutPage() {
    elements.aboutPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

