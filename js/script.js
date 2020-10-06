"use strict";



let numberOfFilms=+prompt("Сколько фильмов Вы уже посмотрели?");


let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false  ,
};

console.log(numberOfFilms);

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// const leftBorderWidth = 1;

// number = 6 ;
// console.log(number);

// const obj={
//     a:50
// };
// obj.a=10;
// console.log(obj);




// var name = 'Ivan';
// console.log(name);

// {
//  var result=50;
// }

// console.log(result);

// alert(5);
// number = 4.6;



