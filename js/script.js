"use strict";



let numberOfFilms=+prompt("Сколько фильмов Вы уже посмотрели?");


let personalMovieDB = {
    count:numberOfFilms,
    movies:[],
    actors:{},
    genres:[],
    privat:false  ,
    ball:[]
};

console.log(numberOfFilms);
let i=0;
for(i=0;i<3;i++){
   const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
    if(a.length>50||a.length==0){
        i--; 
        continue;
          
    } else {  personalMovieDB.movies[i] = a;
        personalMovieDB.ball[i] = b;}
  


}

if(personalMovieDB.count<10){
    alert('Prosmtreno malo filmov');

} else if(personalMovieDB.count>=10&&personalMovieDB.count<=30){
    alert('Vi klasycheskyi zritel!');
}else if(personalMovieDB.count>30){
    alert('Vi kinoman!');
}else{
    alert('Proizoshla oshibka');
}

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

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



