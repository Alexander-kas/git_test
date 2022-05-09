//если создать переменую внутри функции она будет локальный, поэтому мы создаем пустую переменую.
let numberOfFilmes;

function start (){
     // тут задается вопрос пользователю.
    numberOfFilmes = +prompt("How many movies have you watched?", '');

    //это проверка правильного заполнение! без путсой строки, не нажать отмену и можно только цифры.
    while(numberOfFilmes == '' || numberOfFilmes == null || isNaN(numberOfFilmes)){
        // в случае не выполнение будет задань вопрос заного.
        numberOfFilmes = +prompt("How many movies have you watched?", '');
    }
}
// Вызов функции.
start();

const personalMovieDB = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms(){
for (let i = 0; i < 2; i++){
    const a = prompt('Which movie have you watched last?'),
    b = prompt('How can you rate it?');

    if (a != null && b != null && a != '' && b != '' & a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else {
        console.log('error');
        i--; 
    }
}
}

rememberMyFilms();


function detectPersoanlLevel(){
if (personalMovieDB.count < 10){
    console.log('Not enoght movies has watched');
}else if ( personalMovieDB.count >= 10 && personalMovieDB.count <30){
    console.log('You are a classical watcher');
}else if (personalMovieDB.count >= 30){
    console.log('You are a movies addict');
}else {
    console.log('Error appears');
}
}

detectPersoanlLevel();

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
    }

    showMyDB(personalMovieDB.private);

    function writeYourGenres(){
       for (let i = 1; i <= 3; i++){
           // можно написать и так, это понятный код для пользователя.
        //    const genre = prompt(`What is your favourite genere number ${i}?`);
        // Но можно написать и в одну строку - так будет короче и красивие.
           personalMovieDB.genres[i - 1] = prompt(`What is your favourite genere number ${i}?`);
       }
    }
writeYourGenres();



