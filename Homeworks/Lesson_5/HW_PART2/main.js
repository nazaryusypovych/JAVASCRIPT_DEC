//#I2XsG6f
//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaRectangle(a, b){
//     return a*b;
// }
//
// console.log(areaRectangle(5,2));

let areaRectangle = (a, b) => a*b;

console.log(areaRectangle(7, 2));

//#ETGAxbEn8l
//створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaCircle (r){
//     return Math.PI * r * r;
// }
//
// console.log(areaCircle(2));

let areaCircle = (r) => Math.PI * r * r;

console.log(areaCircle(4));

//#Mbiz5K4yFe7
//творити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder (r, h){
//     return Math.PI * r * r * h;
// }
//
// console.log(areaCylinder(2, 2));


let areaCylinder = (r, h) => Math.PI * r * r * h;

console.log(areaCylinder(4, 4));

//#SIdMd0hQ
//створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


// function getEveryoneItem(array) {
//     for (let item of array){
//         console.log(item);
//     }
// }
//
// getEveryoneItem(users);

let getEveryoneItem = (array) => {
    for (let item of array){
        console.log(item)
    }
}

getEveryoneItem(users);

//#59g0IsA
//створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент


// function createArticle (text){
//     document.write(`<p>${text}</p>`);
// }
//
// createArticle(`lorem`);


let createArticlec = (text) => document.write(`<p>${text}</p>`);

createArticlec(`ghbnirnbvuewtbn`);

//#hOL6126
//створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

// function createThreeLi (text){
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createThreeLi(`lorem`);

let createThreeLi = (text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createThreeLi(`fknrjnirn`);

//#0Kxco1edSN
//створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

// function createLi (text, number){
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createLi(`lorem`, 6);


let createLi =  (text, number) =>{
    document.write(`<ul>`);
    for (let i=0; i < number; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createLi(`gfbtfnnhfd`, 8);

//#gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let arrayDate = [1, 2, `dmgkfb`, true];

// function createList(array) {
//     document.write(`<ul>`);
//     for (let item of array){
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createList(arrayDate);

let createList = (array) => {
    document.write(`<ul>`);
    for (let item of array){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

createList(arrayDate);

//#bovDJDTIjt
//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let people = [
    {id: 1, name: `nazar`, age: 24},
    {id: 2, name: `vova`, age: 26}
]

// function getUserDate(array) {
//     for (let item of array){
//         document.write(`
//     <div>${item.id}, ${item.name}, ${item.age}</div>
//     `);
//     }
// }
//
// getUserDate(people);

let getUserDate = (array) =>{
    for (let item of array){
        document.write(`
    <div>${item.id}, ${item.name}, ${item.age}</div>
    `)
    }
}

getUserDate(people);

//#pghbnSB
//створити функцію яка повертає найменьше число з масиву

let arrayNumber = [1, 2, 0, 9, -1];

// function getMinNumber (numbers){
//     let min = numbers[0];
//     for (let i = 1; i<numbers.length; i++){
//         let number = numbers[i];
//         if (number < min){
//             min = number
//         }
//     }
//     return min;
// }
//
// console.log(getMinNumber(arrayNumber));


let getMinNumber = (numbers) =>{
    let min = numbers[0];
    for (let i = 1; i<numbers.length; i++){
        let number = numbers[i];
        if (number < min){
            min = number
        }

    }
    return min;
}

console.log(getMinNumber(arrayNumber));

//#EKRNVPM
//створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let numberArr= [1,2,10];
//
// function sum(arr) {
//     let basket = 0;
//     for (let i = 0; i < arr.length; i++){
//         basket = basket + arr[i];
//     }
//     return basket;
// }
//
// console.log(sum(numberArr));

let sum = (arr) =>{
    let basket = 0;
    for (let i = 0; i < arr.length; i++){
        basket = basket+arr[i];
    }
    return basket;
}

console.log(sum(numberArr));

//#kpsbSQCt2Lf
//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// function swap(arr, index1, index2){
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//
//     return arr;
// }
//
// console.log(swap([11,22,33,44],0,1));


let swap = (arr, i1, i2) =>{
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;

    return arr;
}

console.log(swap([11,22,33,44],0,1));


//#mkGDenYnNjn
//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     let choosenCurrency;
//     for (let item of currencyValues){
//         if (item.currency === exchangeCurrency){
//             choosenCurrency = item;
//         }
//     }
//
//     let result = sumUAH/choosenCurrency.value;
//     return result;
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));


let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let choosenCurrency;
    for (let item of currencyValues){
        if (item.currency === exchangeCurrency){
            choosenCurrency = item;
        }
    }

    let result = sumUAH/choosenCurrency.value;
    return result;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
