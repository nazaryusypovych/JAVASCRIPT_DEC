//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = `Nazar`;
let middleName = `Volodymyrovych`;
let lastName = `Yusypovych`;

//Конкретанація
let person1 = firstName + ` ` + middleName + ` ` + lastName;

console.log(person1);

//Інтерпляція
let person2 = `${firstName} ${middleName} ${lastName}`;

console.log(person2);