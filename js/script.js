"use strict";



let numberOfFilms;
let i=0;
const personalMovieDB = {
    count:numberOfFilms,
    movies:[],
    actors:{},
    genres:[],
    privat:false  ,
    ball:[],
    rememberMyFilms: function(){
        for(i=0;i<3;i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
             b = prompt('На сколько оцените его?', '');
             if(a.length>50||a.length==0||a==null||b==null){
                 i--; 
                 continue;
                   
             } else {  personalMovieDB.movies[i] = a;
                 personalMovieDB.ball[i] = b;}
           
         
         
         }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count<10){
            alert('Prosmtreno malo filmov');
        
        } else if(personalMovieDB.count>=10&&personalMovieDB.count<=30){
            alert('Vi klasycheskyi zritel!');
        }else if(personalMovieDB.count>30){
            alert('Vi kinoman!');
        }else{
            alert('Proizoshla oshibka');
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
       
        
        for (let i=0; i<3; i++){
            const a= prompt("Какой ваш любимый жанр под номером "+ (++i),"");
            if(a==''||a==null){
                i-=2;
                continue;
            }
            else{
                i--;
                personalMovieDB.genres[i]=a;
               
            } 
         }
         personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Любимый жанр #${++i} - это ${item}`);
        }
        );
         
    },
    start: function(){
        numberOfFilms=+prompt("Сколько фильмов Вы уже посмотрели?");

    while(numberOfFilms==""||numberOfFilms==null||isNaN(numberOfFilms)){
        numberOfFilms=+prompt("Сколько фильмов Вы уже посмотрели?");
    }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat===false){
            personalMovieDB.privat=true;
        } else{
            personalMovieDB.privat=false;
        }
    }

};
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.start();
console.log(numberOfFilms);

personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
console.log(personalMovieDB);



// function rememberMyFilms(){
//     for(i=0;i<3;i++){
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//          b = prompt('На сколько оцените его?', '');
//          if(a.length>50||a.length==0||a==null||b==null){
//              i--; 
//              continue;
               
//          } else {  personalMovieDB.movies[i] = a;
//              personalMovieDB.ball[i] = b;}
       
     
     
//      }
// }

// function detectPersonalLevel(){
//     if(personalMovieDB.count<10){
//         alert('Prosmtreno malo filmov');
    
//     } else if(personalMovieDB.count>=10&&personalMovieDB.count<=30){
//         alert('Vi klasycheskyi zritel!');
//     }else if(personalMovieDB.count>30){
//         alert('Vi kinoman!');
//     }else{
//         alert('Proizoshla oshibka');
//     }
    
// }

// function showMyDB(hidden){
// if(!hidden){
//     console.log(personalMovieDB);
// }
// }

// function writeYourGenres(){
//     for (let i=0; i<3; i++){
//        const a= prompt("Какой ваш любимый жанр под номером "+ (++i),"");
//         i--;
//         personalMovieDB.genres[i]=a;

//     }
// }

// function start(){
//     numberOfFilms=+prompt("Сколько фильмов Вы уже посмотрели?");

//     while(numberOfFilms==""||numberOfFilms==null||isNaN(numberOfFilms)){
//         numberOfFilms=+prompt("Сколько фильмов Вы уже посмотрели?");
//     }
// }



/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/