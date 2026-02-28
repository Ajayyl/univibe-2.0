// UniVibe — Movie Data Layer
// Separated from UI logic. Each movie follows the structured schema:
// movie_id, title, genre, experience_type, rating_percent, popularity_score, age_limit, netflix_url, prime_url

const MOVIES = [
    {
        movie_id: 1,
        title: "Inception",
        genre: ["Sci-Fi", "Thriller"],
        experience_type: "intense",
        rating_percent: 87,
        popularity_score: 0.9,
        age_limit: 13,
        netflix_url: "https://www.netflix.com/title/70131314",
        prime_url: "https://www.amazon.com/dp/B0047WJ11G",
        // Extended metadata (for UI rendering)
        year: 2010,
        poster: "https://image.tmdb.org/t/p/original/8IBH6D37t3w6Ld2t4T91M16rQJg.jpg",
        synopsis: "A skilled thief who infiltrates dreams is offered a chance to have his criminal record erased if he can successfully plant an idea in a target's subconscious.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "Netflix", url: "https://www.netflix.com/title/70131314" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B0047WJ11G" }
        ]
    },
    {
        movie_id: 2,
        title: "The Grand Budapest Hotel",
        genre: ["Comedy", "Drama"],
        experience_type: "fun",
        rating_percent: 84,
        popularity_score: 0.7,
        age_limit: 13,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B00J2PGLO0",
        year: 2014,
        poster: "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Grand_Budapest_Hotel_Poster.jpg",
        synopsis: "A legendary concierge at a famous European hotel and his trusted lobby boy become embroiled in the theft of a priceless painting.",
        tags: ["underrated"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B00J2PGLO0" }
        ]
    },
    {
        movie_id: 3,
        title: "Finding Nemo",
        genre: ["Animation", "Adventure"],
        experience_type: "fun",
        rating_percent: 86,
        popularity_score: 0.8,
        age_limit: 0,
        netflix_url: "",
        prime_url: "",
        year: 2003,
        poster: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
        synopsis: "A clownfish named Marlin embarks on a perilous journey across the ocean to find his abducted son Nemo, with the help of a forgetful fish named Dory.",
        tags: ["family-safe"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com/movies/finding-nemo/5Gpj2XqF7BV2" }
        ]
    },
    {
        movie_id: 4,
        title: "Blade Runner 2049",
        genre: ["Sci-Fi", "Drama"],
        experience_type: "intense",
        rating_percent: 81,
        popularity_score: 0.7,
        age_limit: 16,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B0764GY2JD",
        year: 2017,
        poster: "https://image.tmdb.org/t/p/original/g6artf4Xm35a6GfK50bXnI3sM0L.jpg",
        synopsis: "A young blade runner uncovers a long-buried secret that has the potential to plunge what's left of society into chaos.",
        tags: ["cult", "underrated"],
        ottPlatforms: [
            { name: "Prime Video", url: "https://www.amazon.com/dp/B0764GY2JD" },
            { name: "Apple TV", url: "https://tv.apple.com" }
        ]
    },
    {
        movie_id: 5,
        title: "The Shawshank Redemption",
        genre: ["Drama"],
        experience_type: "emotional",
        rating_percent: 91,
        popularity_score: 1.0,
        age_limit: 16,
        netflix_url: "https://www.netflix.com",
        prime_url: "",
        year: 1994,
        poster: "https://image.tmdb.org/t/p/original/q6y0NwXgJKmWd8zLp7E7J0VWc5Z.jpg",
        synopsis: "A banker sentenced to life in Shawshank State Penitentiary forms an unlikely friendship and finds hope through acts of common decency.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "Netflix", url: "https://www.netflix.com" },
            { name: "HBO Max", url: "https://www.hbomax.com" }
        ]
    },
    {
        movie_id: 6,
        title: "My Neighbor Totoro",
        genre: ["Animation", "Fantasy"],
        experience_type: "relaxing",
        rating_percent: 88,
        popularity_score: 0.7,
        age_limit: 0,
        netflix_url: "https://www.netflix.com",
        prime_url: "",
        year: 1988,
        poster: "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
        synopsis: "Two young girls move to the countryside and befriend playful forest spirits, including the lovable giant creature Totoro.",
        tags: ["family-safe", "cult"],
        ottPlatforms: [
            { name: "Netflix", url: "https://www.netflix.com" },
            { name: "HBO Max", url: "https://www.hbomax.com" }
        ]
    },
    {
        movie_id: 7,
        title: "Pulp Fiction",
        genre: ["Crime", "Drama"],
        experience_type: "intense",
        rating_percent: 89,
        popularity_score: 0.9,
        age_limit: 18,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B000I9YJ8E",
        year: 1994,
        poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "Prime Video", url: "https://www.amazon.com/dp/B000I9YJ8E" },
            { name: "Paramount+", url: "https://www.paramountplus.com" }
        ]
    },
    {
        movie_id: 8,
        title: "Coco",
        genre: ["Animation", "Family", "Fantasy"],
        experience_type: "emotional",
        rating_percent: 90,
        popularity_score: 0.8,
        age_limit: 0,
        netflix_url: "",
        prime_url: "",
        year: 2017,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
        synopsis: "A young boy who dreams of becoming a musician journeys to the Land of the Dead to uncover his family's history.",
        tags: ["family-safe"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com/movies/coco/db9orsI5O4gC" }
        ]
    },
    {
        movie_id: 9,
        title: "Drive",
        genre: ["Action", "Drama"],
        experience_type: "intense",
        rating_percent: 79,
        popularity_score: 0.7,
        age_limit: 18,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B006IMZ0DQ",
        year: 2011,
        poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Drive2011Poster.jpg",
        synopsis: "A Hollywood stunt driver who moonlights as a getaway driver finds himself in trouble when he helps his neighbour.",
        tags: ["cult", "underrated"],
        ottPlatforms: [
            { name: "Prime Video", url: "https://www.amazon.com/dp/B006IMZ0DQ" },
            { name: "Apple TV", url: "https://tv.apple.com" }
        ]
    },
    {
        movie_id: 10,
        title: "The Secret Life of Walter Mitty",
        genre: ["Adventure", "Comedy", "Drama"],
        experience_type: "relaxing",
        rating_percent: 65,
        popularity_score: 0.6,
        age_limit: 0,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B00IANO1TA",
        year: 2013,
        poster: "https://upload.wikimedia.org/wikipedia/en/c/cd/The_Secret_Life_of_Walter_Mitty_poster.jpg",
        synopsis: "A daydreamer escapes his anonymous life by disappearing into a world of fantasies of romance, heroism, and action.",
        tags: ["underrated", "family-safe"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B00IANO1TA" }
        ]
    },
    {
        movie_id: 11,
        title: "Interstellar",
        genre: ["Sci-Fi", "Drama", "Adventure"],
        experience_type: "emotional",
        rating_percent: 85,
        popularity_score: 0.9,
        age_limit: 13,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B00TU9UFTS",
        year: 2014,
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival on a dying Earth.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "Paramount+", url: "https://www.paramountplus.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B00TU9UFTS" }
        ]
    },
    {
        movie_id: 12,
        title: "Spirited Away",
        genre: ["Animation", "Fantasy", "Adventure"],
        experience_type: "fun",
        rating_percent: 96,
        popularity_score: 0.8,
        age_limit: 0,
        netflix_url: "https://www.netflix.com",
        prime_url: "",
        year: 2001,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        synopsis: "A young girl wanders into a world of spirits ruled by gods, witches, and strange creatures, and must find the courage to free herself and her parents.",
        tags: ["cult", "family-safe"],
        ottPlatforms: [
            { name: "Netflix", url: "https://www.netflix.com" },
            { name: "HBO Max", url: "https://www.hbomax.com" }
        ]
    },
    {
        movie_id: 13,
        title: "The Wolf of Wall Street",
        genre: ["Crime", "Comedy", "Drama"],
        experience_type: "fun",
        rating_percent: 79,
        popularity_score: 0.9,
        age_limit: 18,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B00IIU9FMQ",
        year: 2013,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
        synopsis: "Based on the true story of Jordan Belfort, a wealthy stockbroker who ran a massive securities fraud scheme.",
        tags: [],
        ottPlatforms: [
            { name: "Paramount+", url: "https://www.paramountplus.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B00IIU9FMQ" }
        ]
    },
    {
        movie_id: 14,
        title: "Up",
        genre: ["Animation", "Adventure", "Comedy"],
        experience_type: "emotional",
        rating_percent: 88,
        popularity_score: 0.8,
        age_limit: 0,
        netflix_url: "",
        prime_url: "",
        year: 2009,
        poster: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
        synopsis: "An elderly widower ties thousands of balloons to his house and flies to South America, accidentally taking a young stowaway along for the ride.",
        tags: ["family-safe"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com/movies/up/3HbSCnQEbir9" }
        ]
    },
    {
        movie_id: 15,
        title: "Moonlight",
        genre: ["Drama"],
        experience_type: "emotional",
        rating_percent: 92,
        popularity_score: 0.7,
        age_limit: 18,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B01MU9CMGP",
        year: 2016,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/84/Moonlight_%282016_film%29_poster.jpg",
        synopsis: "A timeless story of human self-discovery and connection, told across three defining chapters in the life of a young Black man growing up in Miami.",
        tags: ["underrated"],
        ottPlatforms: [
            { name: "Prime Video", url: "https://www.amazon.com/dp/B01MU9CMGP" },
            { name: "Apple TV", url: "https://tv.apple.com" }
        ]
    },
    {
        movie_id: 16,
        title: "The Matrix",
        genre: ["Sci-Fi", "Action"],
        experience_type: "intense",
        rating_percent: 83,
        popularity_score: 0.9,
        age_limit: 16,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B000HAB4KS",
        year: 1999,
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        synopsis: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "HBO Max", url: "https://www.hbomax.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B000HAB4KS" }
        ]
    },
    {
        movie_id: 17,
        title: "Lost in Translation",
        genre: ["Drama", "Romance"],
        experience_type: "relaxing",
        rating_percent: 80,
        popularity_score: 0.6,
        age_limit: 13,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B000IBUPMK",
        year: 2003,
        poster: "https://upload.wikimedia.org/wikipedia/en/4/4c/Lost_in_Translation_poster.jpg",
        synopsis: "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
        tags: ["underrated"],
        ottPlatforms: [
            { name: "Prime Video", url: "https://www.amazon.com/dp/B000IBUPMK" },
            { name: "Apple TV", url: "https://tv.apple.com" }
        ]
    },
    {
        movie_id: 18,
        title: "Mad Max: Fury Road",
        genre: ["Action", "Sci-Fi"],
        experience_type: "intense",
        rating_percent: 90,
        popularity_score: 0.8,
        age_limit: 16,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B00ZIFHU9Y",
        year: 2015,
        poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
        synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a drifter named Max.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "HBO Max", url: "https://www.hbomax.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B00ZIFHU9Y" }
        ]
    },
    {
        movie_id: 19,
        title: "The Truman Show",
        genre: ["Comedy", "Drama"],
        experience_type: "emotional",
        rating_percent: 83,
        popularity_score: 0.8,
        age_limit: 0,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B001EBWIPY",
        year: 1998,
        poster: "https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg",
        synopsis: "An insurance salesman discovers his whole life is actually a giant TV show, and everyone around him is acting.",
        tags: ["cult", "family-safe"],
        ottPlatforms: [
            { name: "Paramount+", url: "https://www.paramountplus.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B001EBWIPY" }
        ]
    },
    {
        movie_id: 20,
        title: "Amélie",
        genre: ["Romance", "Comedy"],
        experience_type: "fun",
        rating_percent: 85,
        popularity_score: 0.7,
        age_limit: 13,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B000I9YLWM",
        year: 2001,
        poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Amelie_poster.jpg",
        synopsis: "A shy waitress in Montmartre decides to change the lives of those around her for the better, while struggling with her own isolation.",
        tags: ["underrated"],
        ottPlatforms: [
            { name: "Prime Video", url: "https://www.amazon.com/dp/B000I9YLWM" },
            { name: "Apple TV", url: "https://tv.apple.com" }
        ]
    },
    {
        movie_id: 21,
        title: "Fight Club",
        genre: ["Drama", "Thriller"],
        experience_type: "intense",
        rating_percent: 79,
        popularity_score: 0.9,
        age_limit: 18,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B003MAQG9Y",
        year: 1999,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Fight+Club",
        synopsis: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "Prime Video", url: "https://www.amazon.com/dp/B003MAQG9Y" },
            { name: "Hulu", url: "https://www.hulu.com" }
        ]
    },
    {
        movie_id: 22,
        title: "Inside Out",
        genre: ["Animation", "Comedy", "Family"],
        experience_type: "emotional",
        rating_percent: 94,
        popularity_score: 0.8,
        age_limit: 0,
        netflix_url: "",
        prime_url: "",
        year: 2015,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Inside+Out",
        synopsis: "After young Riley is uprooted from her Midwest life, her emotions — Joy, Fear, Anger, Disgust and Sadness — conflict on how to navigate a new city.",
        tags: ["family-safe"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com/movies/inside-out/2I0bBbhZIbkZ" }
        ]
    },
    {
        movie_id: 23,
        title: "No Country for Old Men",
        genre: ["Thriller", "Crime"],
        experience_type: "intense",
        rating_percent: 86,
        popularity_score: 0.8,
        age_limit: 18,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B0012I8B0Y",
        year: 2007,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=No+Country+For+Old+Men",
        synopsis: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and a suitcase full of cash in the desert.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "Paramount+", url: "https://www.paramountplus.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B0012I8B0Y" }
        ]
    },
    {
        movie_id: 24,
        title: "WALL-E",
        genre: ["Animation", "Sci-Fi", "Family"],
        experience_type: "relaxing",
        rating_percent: 95,
        popularity_score: 0.8,
        age_limit: 0,
        netflix_url: "",
        prime_url: "",
        year: 2008,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=WALL-E",
        synopsis: "In a distant future, a small waste-collecting robot inadvertently embarks on a space journey that will decide the fate of mankind.",
        tags: ["family-safe", "cult"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com/movies/wall-e/5G1wpZC2Lb6I" }
        ]
    },
    {
        movie_id: 25,
        title: "Her",
        genre: ["Sci-Fi", "Romance", "Drama"],
        experience_type: "emotional",
        rating_percent: 82,
        popularity_score: 0.7,
        age_limit: 13,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B00HHJR5PO",
        year: 2013,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Her",
        synopsis: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        tags: ["underrated"],
        ottPlatforms: [
            { name: "Prime Video", url: "https://www.amazon.com/dp/B00HHJR5PO" },
            { name: "Apple TV", url: "https://tv.apple.com" }
        ]
    },
    {
        movie_id: 26,
        title: "The Dark Knight",
        genre: ["Action", "Crime", "Drama"],
        experience_type: "intense",
        rating_percent: 90,
        popularity_score: 1.0,
        age_limit: 13,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B001I189MG",
        year: 2008,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
        synopsis: "Batman raises the stakes in his war on crime, facing off against the Joker, a criminal mastermind who wreaks havoc on Gotham City.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "HBO Max", url: "https://www.hbomax.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B001I189MG" }
        ]
    },
    {
        movie_id: 27,
        title: "Paddington 2",
        genre: ["Comedy", "Family", "Adventure"],
        experience_type: "fun",
        rating_percent: 93,
        popularity_score: 0.7,
        age_limit: 0,
        netflix_url: "https://www.netflix.com",
        prime_url: "https://www.amazon.com/dp/B079DZ5XWD",
        year: 2017,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Paddington+2",
        synopsis: "Paddington, now settled with the Brown family in London, picks up a series of odd jobs to buy the perfect present, but must clear his name when the gift is stolen.",
        tags: ["family-safe", "underrated"],
        ottPlatforms: [
            { name: "Netflix", url: "https://www.netflix.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B079DZ5XWD" }
        ]
    },
    {
        movie_id: 28,
        title: "Eternal Sunshine of the Spotless Mind",
        genre: ["Romance", "Drama", "Sci-Fi"],
        experience_type: "emotional",
        rating_percent: 82,
        popularity_score: 0.8,
        age_limit: 16,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B000JLQUZI",
        year: 2004,
        poster: "https://upload.wikimedia.org/wikipedia/en/a/a4/Eternal_Sunshine_of_the_Spotless_Mind.png",
        synopsis: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        tags: ["cult", "underrated"],
        ottPlatforms: [
            { name: "Peacock", url: "https://www.peacocktv.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B000JLQUZI" }
        ]
    },
    {
        movie_id: 29,
        title: "John Wick",
        genre: ["Action", "Thriller"],
        experience_type: "intense",
        rating_percent: 75,
        popularity_score: 0.8,
        age_limit: 18,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B00R0291Q2",
        year: 2014,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=John+Wick",
        synopsis: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        tags: [],
        ottPlatforms: [
            { name: "Peacock", url: "https://www.peacocktv.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B00R0291Q2" }
        ]
    },
    {
        movie_id: 30,
        title: "Ratatouille",
        genre: ["Animation", "Comedy", "Family"],
        experience_type: "fun",
        rating_percent: 92,
        popularity_score: 0.8,
        age_limit: 0,
        netflix_url: "",
        prime_url: "",
        year: 2007,
        poster: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
        synopsis: "A rat named Remy dreams of becoming a great chef and tries to achieve his goal by forming an alliance with a Parisian restaurant's garbage boy.",
        tags: ["family-safe"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com/movies/ratatouille/39wmItIWsg5s" }
        ]
    },
    {
        movie_id: 31,
        title: "The Departed",
        genre: ["Crime", "Thriller", "Drama"],
        experience_type: "intense",
        rating_percent: 85,
        popularity_score: 0.8,
        age_limit: 18,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B000P0J0AI",
        year: 2006,
        poster: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed23.jpg",
        synopsis: "An undercover cop and a mole in the police try to identify each other while infiltrating an Irish gang in Boston.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "HBO Max", url: "https://www.hbomax.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B000P0J0AI" }
        ]
    },
    {
        movie_id: 32,
        title: "Howl's Moving Castle",
        genre: ["Animation", "Fantasy", "Romance"],
        experience_type: "relaxing",
        rating_percent: 87,
        popularity_score: 0.7,
        age_limit: 0,
        netflix_url: "https://www.netflix.com",
        prime_url: "",
        year: 2004,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Howls+Moving+Castle",
        synopsis: "When a young hat-maker is turned into an old woman by a witch's curse, she finds refuge in the magical moving castle of the wizard Howl.",
        tags: ["family-safe", "cult"],
        ottPlatforms: [
            { name: "Netflix", url: "https://www.netflix.com" },
            { name: "HBO Max", url: "https://www.hbomax.com" }
        ]
    },
    {
        movie_id: 33,
        title: "Parasite",
        genre: ["Thriller", "Drama", "Comedy"],
        experience_type: "intense",
        rating_percent: 96,
        popularity_score: 0.9,
        age_limit: 16,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B07YM14FPF",
        year: 2019,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Parasite",
        synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "Hulu", url: "https://www.hulu.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B07YM14FPF" }
        ]
    },
    {
        movie_id: 34,
        title: "Before Sunrise",
        genre: ["Romance", "Drama"],
        experience_type: "relaxing",
        rating_percent: 81,
        popularity_score: 0.6,
        age_limit: 13,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B00AEFXVYM",
        year: 1995,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Before+Sunrise",
        synopsis: "A young man and woman meet on a train and end up spending one romantic evening together in Vienna before going their separate ways.",
        tags: ["underrated"],
        ottPlatforms: [
            { name: "Prime Video", url: "https://www.amazon.com/dp/B00AEFXVYM" },
            { name: "Apple TV", url: "https://tv.apple.com" }
        ]
    },
    {
        movie_id: 35,
        title: "Whiplash",
        genre: ["Drama", "Music"],
        experience_type: "intense",
        rating_percent: 94,
        popularity_score: 0.8,
        age_limit: 16,
        netflix_url: "https://www.netflix.com",
        prime_url: "https://www.amazon.com/dp/B00QGHB8D0",
        year: 2014,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Whiplash",
        synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an abusive instructor.",
        tags: ["cult", "underrated"],
        ottPlatforms: [
            { name: "Netflix", url: "https://www.netflix.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B00QGHB8D0" }
        ]
    },
    {
        movie_id: 36,
        title: "Soul",
        genre: ["Animation", "Fantasy", "Comedy"],
        experience_type: "emotional",
        rating_percent: 89,
        popularity_score: 0.7,
        age_limit: 0,
        netflix_url: "",
        prime_url: "",
        year: 2020,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Soul",
        synopsis: "A middle-school music teacher's passion for jazz leads him on an extraordinary journey to discover what it means to have a soul.",
        tags: ["family-safe"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com/movies/soul/77tlWpb1AWsC" }
        ]
    },
    {
        movie_id: 37,
        title: "Goodfellas",
        genre: ["Crime", "Drama"],
        experience_type: "intense",
        rating_percent: 87,
        popularity_score: 0.9,
        age_limit: 18,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B0011TNRNE",
        year: 1990,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Goodfellas",
        synopsis: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
        tags: ["cult"],
        ottPlatforms: [
            { name: "HBO Max", url: "https://www.hbomax.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B0011TNRNE" }
        ]
    },
    {
        movie_id: 38,
        title: "The Princess Bride",
        genre: ["Adventure", "Comedy", "Fantasy"],
        experience_type: "fun",
        rating_percent: 84,
        popularity_score: 0.8,
        age_limit: 0,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B00AOT8JUC",
        year: 1987,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=Princess+Bride",
        synopsis: "A farmhand-turned-pirate encounters numerous obstacles, enemies, and allies in his quest to be reunited with his true love.",
        tags: ["cult", "family-safe"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B00AOT8JUC" }
        ]
    },
    {
        movie_id: 39,
        title: "A Quiet Place",
        genre: ["Horror", "Thriller"],
        experience_type: "intense",
        rating_percent: 80,
        popularity_score: 0.7,
        age_limit: 16,
        netflix_url: "",
        prime_url: "https://www.amazon.com/dp/B07BZ5HMTH",
        year: 2018,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=A+Quiet+Place",
        synopsis: "A family is forced to live in silence while hiding from creatures that hunt by sound, finding new ways to survive in a post-apocalyptic world.",
        tags: ["underrated"],
        ottPlatforms: [
            { name: "Paramount+", url: "https://www.paramountplus.com" },
            { name: "Prime Video", url: "https://www.amazon.com/dp/B07BZ5HMTH" }
        ]
    },
    {
        movie_id: 40,
        title: "The Lion King",
        genre: ["Animation", "Adventure", "Family"],
        experience_type: "emotional",
        rating_percent: 88,
        popularity_score: 0.9,
        age_limit: 0,
        netflix_url: "",
        prime_url: "",
        year: 1994,
        poster: "https://placehold.co/600x900/1a1a2e/ffffff?text=The+Lion+King",
        synopsis: "A young lion prince flees his kingdom after the murder of his father, only to learn the true meaning of responsibility and bravery.",
        tags: ["cult", "family-safe"],
        ottPlatforms: [
            { name: "Disney+", url: "https://www.disneyplus.com/movies/the-lion-king/1HqwiEcje6Nj" }
        ]
    }
];

// Export for ES module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MOVIES;
}
