import ('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director)
    console.log(directors);
    return directors;
}





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const selectedMovie =  moviesArray.filter((movie) => {
        if(movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')) return movie;
    })
    console.log(selectedMovie.length);
    return selectedMovie.length;
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const total = moviesArray.reduce((acc, curr) => {
        return acc + curr.score;
    },0)

    const average = ((total/moviesArray.length).toFixed(2));
    console.log(average);
    return average;
}






// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    const totalScore = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
    console.log((totalScore/dramaMovies.length).toFixed(2));
    return (totalScore/dramaMovies.length).toFixed(2);
    }



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray].sort((a,b) => {
        return a.year -b.year;
    })
    console.log(sortedMovies);
    return sortedMovies;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortMovies = [...moviesArray].sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        } 
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    });

    const sortTitles = sortMovies.map(movie => movie.title).slice(0, 20);

    console.log(sortTitles);
    return sortTitles;

}


getAllDirectors(movies);
howManyMovies(movies);
scoresAverage(movies);
dramaMoviesScore(movies);
orderByYear(movies);
orderAlphabetically(movies);