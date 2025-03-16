//#XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)




function CreateUser (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone




}


let user1 = new CreateUser(1, `nazar`, `oganov`, `nar@gamail.com`, 380975368547);
let user2 = new CreateUser(2, `vova`, `lob`, `vov@gamail.com`, 380979872536);
let user3 = new CreateUser(3, `roman`, `kit`, `kit@gamail.com`, 380982569743);
let user4 = new CreateUser(4, `oleg`, `aldo`, `ald@gamail.com`, 380681245698);
let user5 = new CreateUser(5, `tom`, `old`, `tonold@gamail.com`, 380671236547);
let user6 = new CreateUser(6, `jey`, `let`, `letd@gamail.com`, 380674125367);
let user7 = new CreateUser(7, `bob`, `sing`, `singer@gamail.com`, 380982541314);
let user8 = new CreateUser(8, `dilan`, `brong`, `brongster@gamail.com`, 380635214785);
let user9 = new CreateUser(9, `ben`, `yellow`, `benyell@gamail.com`, 380675214321);
let user10 = new CreateUser(10, `fib`, `long`, `fibster@gamail.com`, 380507478987);





let users = [];



users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);
users.push(user8);
users.push(user9);
users.push(user10);

console.log(users);

//#2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let couplesId = users.filter(value =>{
    if (value.id % 2){
        return false // false - неправда - переміщається з users до couplesId (неправдиві значення переміщаються)
    }else {
        return true // true - правда - залишається в масиві users (масив users не змінюється)
    }
});

console.log(couplesId);
console.log(users);

//#pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let growSortId = users.sort((a, b) => {
    return b.id - a.id
});

console.log(growSortId); // посилання на users
console.log(users); // змінюється первиний масив users

//#nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client (id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order
}


let clients = [

    new Client(1, `nazar`, `oganov`, `nar@gamail.com`, 380975368547, 6985),
    new Client(2, `vova`, `lob`, `vov@gamail.com`, 380979872536, 9874),
    new Client(3, `roman`, `kit`, `kit@gamail.com`, 380982569743, 9825),
    new Client(4, `oleg`, `aldo`, `ald@gamail.com`, 380681245698, 3214),
    new Client(5, `tom`, `old`, `tonold@gamail.com`, 380671236547, 5241),
    new Client(6, `jey`, `let`, `letd@gamail.com`, 380674125367, 2563),
    new Client(7, `bob`, `sing`, `singer@gamail.com`, 380982541314, 8569),
    new Client(8, `dilan`, `brong`, `brongster@gamail.com`, 380635214785, 1276),
    new Client(9, `ben`, `yellow`, `benyell@gamail.com`, 380675214321, 3642),
    new Client(10, `fib`, `long`, `fibster@gamail.com`, 380507478987, 2534)

]

console.log(clients);


//#8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


console.log(clients.sort((a, b) => b.order - a.order));


//#vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car





function Car (model, manufacturer, year, maximumSpeed, engineCapacity){

    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;


    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    }

    this.info = function (){
        for (const key in this) {
            console.log(`${key} - ${this[key]}`); //this - це звернення до кожного обєкту конструктора Car
        }
    }

    this.increaseMaxSpeed = function (newSpeed){
        this.maximumSpeed = this.maximumSpeed + newSpeed

    }

    this.changeYear = function (newValue){
        this.year = newValue;
    }

    this.addDriver = function (driver){
        this.driver = driver;
    }
}


const car = new Car(`BMW`, `Compani BMW`, 2017, 159, 2);
console.log(car);

car.drive();

car.info();

car.increaseMaxSpeed(100);
console.log(car.maximumSpeed);

car.changeYear(2018);
console.log(car.year);

car.addDriver([name = 'nazar', year = 8]);
console.log(car.driver);


console.log(car);

//#zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Popelyushka{

    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }

}

class Prynts{

    constructor(name, age, faundShoe) {
        this.name = name;
        this.age = age;
        this.faundShoe = faundShoe;
    }
}



let popelyushkas = [

    new Popelyushka (`jan`, 18, 25),
    new Popelyushka (`lena`, 19, 26),
    new Popelyushka (`olga`, 20, 27),
    new Popelyushka (`mary`, 21, 28),
    new Popelyushka (`ket`, 22, 29),
    new Popelyushka (`tina`, 23, 30),
    new Popelyushka (`vika`, 24, 31),
    new Popelyushka (`liza`, 25, 32),
    new Popelyushka (`fiona`, 26, 33),
    new Popelyushka (`linda`, 27, 34),
];

console.log(popelyushkas)

let prynts = new Prynts (`tom`, 25, 30);



//За допомоги циклу знайти яка попелюшка повинна бути з принцом
for (const girl of popelyushkas) {
    if (girl.legSize === prynts.faundShoe){
        console.log(girl);
    }

}



//знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let oneGirl = popelyushkas.find(value => value.legSize === prynts.faundShoe);
console.log(oneGirl)
