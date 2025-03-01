//#dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let q = 'hello world';
let w = 'lorem ipsum';
let e = 'javascript is cool';

console.log(q.length);
console.log(w.length);
console.log(e.length);



//#8lld9HMxXWB
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'


let r = 'hello world';
let t = 'lorem ipsum';
let y = 'javascript is cool';

let r2 = r.toUpperCase();
console.log(r2); // створюється нова змінна
console.log(r); // стара залишається без змін


let t2 = t.toUpperCase();
console.log(t2);

let y2 = y.toUpperCase();
console.log(y2);


//#ClDsAm7xba7
//- Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let u = 'HELLO WORLD';
let p = 'LOREM IPSUM';
let o = 'JAVASCRIPT IS COOL';

let u2 = u.toLowerCase();
console.log(u2); // створюється нова змінна
console.log(u); // стара залишається без змін

let p2 = p.toLowerCase();
console.log(p2);

let o2 = o.toLowerCase();
console.log(o2);

//#0b89BkYZwu
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';

let clearStr = str.replaceAll(` `, ``);

console.log(clearStr);

//#bfoJuse4ZzP
//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let str2 = 'Ревуть воли як ясла повні';
let str3 = 'Lorem ipsum';

// function stringToarray(str){
//     return str.split(` `);
// }
//
// console.log(stringToarray(str2));

let stringToarray = (str) => str.split(` `);

console.log(stringToarray(str2));
console.log(stringToarray(str3));

//#Rbr5kEQ
//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];


// let strArray  =  numbers.map(function (value){  //value - це кожен окремий елемент масиву
//     return value + ``;
// })
// console.log(strArray);

let strArray  =  numbers.map(value => value + ``);

console.log(strArray);



// #5hqyKTfmc
//- створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


let nums = [11,21,3];

function sortNums(array,direction){
    if (direction === `ascending`){
       let sort = array.sort((num1, num2) => num1-num2);
        return sort
    } else if (direction === `descending`){
        let sort = array.sort((num1, num2) => num2-num1);
        return sort
    }

}

console.log(sortNums(nums, `ascending`));