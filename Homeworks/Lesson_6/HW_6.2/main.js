//#yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  -- відсортувати його за спаданням за monthDuration

let monthDuration = coursesAndDurationArray.sort((item1, item2) => item2.monthDuration - item1.monthDuration);

console.log(monthDuration);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let courseMoreFiveMouth = coursesAndDurationArray.filter((coursesAndDurationArray) => coursesAndDurationArray.monthDuration > 5);

console.log(courseMoreFiveMouth);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let NewCoursesAndDurationArray = coursesAndDurationArray.map((value, index) =>{
    return {id: index+1, title: value.title, monthDuration: value.monthDuration}
});

console.log(NewCoursesAndDurationArray);


//#bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }



let cardSuits = [`spade`, 'diamond','heart', 'clubs'];
let cardValues = ['6', `7`, `8`, `9`, '10', 'ace','jack','queen','king'];


const cards = [];

for (const cardSuit of cardSuits) {
    for (const cardValue of cardValues) {
        const card = ({suit: cardSuit,  value: cardValue});
        if (cardSuit === `heart` || cardSuit === 'diamond'){
            card.color = `red`;
        } else {
            card.color = `black`;
        }
        cards.push(card);
    }
}

console.log(cards);

//  - знайти піковий туз

let spadeAce = cards.find(value => cards.value === 'ace' && cards.suit === `spade`);

console.log(spadeAce);

//  - всі шістки

let allSix = cards.find(value => cards.value === '6');

console.log(allSix);

//  - всі червоні карти

let allRedCards = cards.find(value => cards.color === 'red');

console.log(allRedCards);

//  - всі буби

let allDiamondCards = cards.find(value => cards.suit === 'diamond');

console.log(allDiamondCards);

//  - всі трефи від 9 та більше

let allClubsCards = cards.find(value => cards.suit === 'clubs' && (cards.value !== `6` || cards.value !== `7` || cards.value !== `8` || cards.value !== `9`));

console.log(allClubsCards);


//#EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let redusCards = cards.reduce((accumulator, card)=>{
    if(card.suit === `spade`){
        accumulator.cardsSpade.push(card);
    }else if(card.suit === `diamond`){
        accumulator.cardsDiamond.push(card);
    }else if(card.suit === `heart`) {
        accumulator.cardsHeart.push(card);
    }else if(card.suit === `clubs`) {
        accumulator.cardsClubs.push(card);
    }
    return accumulator;

}, {cardsSpade: [], cardsDiamond: [], cardsHeart: [], cardsClubs: []});

console.log(cards);
console.log(redusCards);

//#4LJn7zBx
// взяти з arrays.js масив coursesArray
//написати пошук всіх об'єктів, в яких в modules є sass
//написати пошук всіх об'єктів, в яких в modules є docker


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


let findSass = coursesArray.filter(course => {
    return course.modules.includes(`sass`);
});

console.log(findSass);

let findDocker = coursesArray.filter(course => {
    return course.modules.includes(`docker`);
});

console.log(findDocker);