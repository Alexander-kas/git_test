const numberOfFilmes = +prompt("How many movies have you watched?", '');

const personalMovieDB = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Which movie have you watched last?'),
      b = prompt('How can you rate it?'),
      c = prompt('Which movie have you watched last?'),
      d = prompt('How can you rate it?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);