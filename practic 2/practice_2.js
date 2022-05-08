const numberOfFilmes = +prompt("How many movies have you watched?", '');

const personalMovieDB = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


for (let i = 0; i < 2; i++){
    const a = prompt('Which movie have you watched last?'),
    b = prompt('How can you rate it?');


    /* a != null - проверяет если пользователь не нажал отмену. ( тогда это true)
    /* a != '' - проверяет если пользователь не оставил пустую строку. ( тогда это true)
    /* a.length < 50 - проверяет если длина название не более 50 символов. ( тогда это true)
    */
    if (a != null && b != null && a != '' && b != '' & a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else {
        console.log('error');
        i--; //Это значит что если условие не соблюдени то оно вернется на шаг назад и задасть вопросы занаго.
    }
}

if (personalMovieDB.count < 10){
    console.log('Not enoght movies has watched');
}else if ( personalMovieDB.count >= 10 && personalMovieDB.count <30){
    console.log('You are a classical watcher');
}else if (personalMovieDB.count >= 30){
    console.log('You are a movies addict');
}else {
    console.log('Error appears');
}
console.log(personalMovieDB);



