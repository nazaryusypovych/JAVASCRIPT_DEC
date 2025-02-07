//#67kfznmiMl
//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let elements = [1, 3, -8, `nazar`, `neo`, 9, true, false, `jass`, 5];

console.log(elements[0]);
console.log(elements[1]);
console.log(elements[2]);
console.log(elements[3]);
console.log(elements[4]);
console.log(elements[5]);
console.log(elements[6]);
console.log(elements[7]);
console.log(elements[8]);
console.log(elements[9]);

//#LARqoUj5I
//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: `Чума`,
    pageCount: 297,
    genre: `роман`
}

let book2 = {
    title: `Чорний лебідь`,
    pageCount: 375,
    genre: `дукументалістика`
}

let book3 = {
    title: `Замок`,
    pageCount: 278,
    genre: `роман`
}

console.log(book1);
console.log(book2);
console.log(book3);

//#sA3Gg1sCp
//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: `Замок`,
    pageCount: 278,
    genre: `роман`,
    authors: {
        name: `Альбер Камю`,
        age: 46
    }
}

let book5 = {
    title: `Чорний лебідь`,
    pageCount: 375,
    genre: `дукументалістика`,
    authors: {
        name: `Насім Ніколас Талеб`,
        age: 64
    }
}

let book6 = {
    title: `Замок`,
    pageCount: 278,
    genre: `роман`,
    authors: {
        name: `Франц Кафка`,
        age: 40
    }
}

console.log(book4);
console.log(book5);
console.log(book6);

//#jCHFnEbdmFd
//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    [name = 'Nazar', age = 28, password = 5872],
    [name = 'Troy', age = 24, password = 2589],
    [name = 'Neo', age = 29, password = 4872],
    [name = 'Alan', age = 23, password = 9257],
    [name = 'Tom', age = 27, password = 9021],
    [name = 'Ken', age = 27, password = 9002],
    [name = 'Kevin', age = 45, password = 9369],
    [name = 'Joy', age = 48, password = 1125],
    [name = 'Leo', age = 59, password = 9988],
    [name = 'Zak', age = 27, password = 8712],

]

console.log(users[0][2]);
console.log(users[1][2]);
console.log(users[2][2]);
console.log(users[3][2]);
console.log(users[4][2]);
console.log(users[5][2]);
console.log(users[6][2]);
console.log(users[7][2]);
console.log(users[8][2]);
console.log(users[9][2]);


//#coYydZuaeEB
//Описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatureWeek = [
    [morning = 2, afternoon = 6, evening = 0],
    [morning = 1, afternoon = 4, evening = 1],
    [morning = 3, afternoon = 7, evening = 2],
    [morning = 2, afternoon = 4, evening = -1],
    [morning = 1, afternoon = 3, evening = 2],
    [morning = 4, afternoon = 9, evening = 4],
    [morning = 3, afternoon = 8, evening = 3],
]

console.log(temperatureWeek);

