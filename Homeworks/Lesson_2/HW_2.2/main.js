//#bAUsaq6LI
//Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = -3;

if (x !== 0){
    console.log(`Вірно`);
} else {
    console.log(`Невірно`);
}

//#3ckURgvs
//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = 70;

if (time>= 0 && time<15){
    console.log(`1 part`);

} else if (time>= 15 && time<30){
    console.log(`2 part`);

} else if (time>= 30 && time<45){
    console.log(`3 part`);

}else if (time>= 45 && time<60){
    console.log(`4 part`);

}else{
    console.log(`?????`);
}

//#UMoNq4biWGe
//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 21;

if (day>= 0 && day<=10){
    console.log(`1 part`);

} else if (day> 10 && day<=20){
    console.log(`2 part`);

} else if (day> 20 && day<=31){
    console.log(`3 part`);

}else{
    console.log(`?????`);
}

//#KzrtqyQ
//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayWeek = `Friday`;

switch (dayWeek){
    case `Monday`:
        console.log(`Monday`);
        break;

    case `Tuesday`:
        console.log(`Tuesday`);
        break;

    case `Wednesday`:
        console.log(`Wednesday`);
        break;

    case `Thursday`:
        console.log(`Thursday`);
        break;

    case `Friday`:
        console.log(`Friday`);
        break;

    case `Saturday`:
        console.log(`Saturday`);
        break;

    case `Sunday`:
        console.log(`Sunday`);
        break;

        default:
            console.log(`?????`);

}

//#uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = 5;
let b = 3;

if (a>b){
    console.log(a);
}else if(b>a){
    console.log(b);
}else if(a===b){
    console.log(`рівні числа`);
}

//#iBvqtjEm
//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x2 = 0;

if(x2===undefined || x2===null || x2===0 || x2===false){
    x2 = "default";
}

console.log(x2)

//#awLXL6TBzg
//з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>5){
    console.log(`JavaScript Complex Супер`);
}

if(coursesAndDurationArray[1].monthDuration>5){
    console.log(`Java Complex Супер`);
}

if(coursesAndDurationArray[2].monthDuration>5){
    console.log(`Python Complex Супер`);
}

if(coursesAndDurationArray[3].monthDuration>5){
    console.log(`QA Complex Супер`);
}

if(coursesAndDurationArray[4].monthDuration>5){
    console.log(`FullStack Супер`);
}

if(coursesAndDurationArray[5].monthDuration>5){
    console.log(`Frontend Супер`);
}
