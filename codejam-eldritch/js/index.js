

/*import blueCardsData from './data.js';
console.log(blueCardsData[1].src);


const openCard = document.querySelector('.open')

openCard.style.background = "url('https://github.com/Marigza/eldritch-codejam/blob/main/assets/MythicCards/blue/blue1.png?raw=true')";

const ancient = document.querySelectorAll('.ancient')
console.log(ancient);*/

// выбор древнего

// установка трека в зависимости от имени древнего

// выбор уровня сложности

// отбор карт в зависимости от уровня сложности

// подсчет количества карт разных цветов для партии

const green = ['green1', 'green2', 'green3', 'green4', 'green5', 'green6', 'green7', 'green8', 'green9', 'green10', 'green11', 'green12', 'green13', 'green14', 'green15', 'green16', 'green17', 'green18'];
const blue = ['blue1', 'blue2', 'blue3', 'blue4', 'blue5', 'blue6', 'blue7', 'blue7', 'blue8', 'blue10', 'blue11', 'blue12',];
const brown = ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown6', 'brown7', 'brown8', 'brown9', 'brown10', 'brown11', 'brown12', 'brown13', 'brown14', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20', 'brown21',]

const azatot = [ {  greenCards: 1,
                    blueCards: 1,
                    brownCards: 2,
                },
                 {  greenCards: 2,
                    blueCards: 1,
                    brownCards: 3,
                },
                {   greenCards: 2,
                    blueCards: 0,
                    brownCards: 4,
                }]

const greenSum = azatot[0].greenCards + azatot[1].greenCards + azatot[2].greenCards
const blueSum = azatot[0].blueCards + azatot[1].blueCards + azatot[2].blueCards
const brownSum = azatot[0].brownCards + azatot[1].brownCards + azatot[2].brownCards

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min)) + min);
}

// случайный выбор карт одного цвета в нужном для партии количестве

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
shuffle(green);
let newGreen = green.slice(0, greenSum)
shuffle(newGreen);

shuffle(blue);
let newBlue = blue.slice(0, blueSum)
shuffle(newBlue);

shuffle(brown);
let newBrown = brown.slice(0, brownSum)
shuffle(newBrown);

console.log(newGreen)
console.log(newBlue)
console.log(newBrown)

// !!!отбор карт по цветам и количеству в первую стадию. перемешивание этих карт.

const firstStage = newGreen.slice(0, azatot[0].greenCards) + ',' + newBlue.slice(0, azatot[0].blueCards) + ',' + newBrown.slice(0, azatot[0].brownCards)
const secondStage = newGreen.slice(azatot[0].greenCards, azatot[1].greenCards + azatot[0].greenCards) + ',' + newBlue.slice(azatot[0].blueCards, azatot[1].blueCards + azatot[0].blueCards) + ',' + newBrown.slice(azatot[0].brownCards, azatot[1].brownCards + azatot[0].brownCards)
const thirdStage = newGreen.slice(azatot[1].greenCards + azatot[0].greenCards, azatot[2].greenCards + azatot[1].greenCards + azatot[0].greenCards) + ',' + newBlue.slice(azatot[1].blueCards + azatot[0].blueCards, azatot[2].blueCards + azatot[1].blueCards + azatot[0].blueCards) + ',' + newBrown.slice(azatot[1].brownCards + azatot[0].brownCards, azatot[2].brownCards + azatot[1].brownCards + azatot[0].brownCards)

// убрать пустой элемент массива, если количество карт в стадии равно 0

let first = firstStage.split(',');
let second = secondStage.split(',');
let third = thirdStage.split(','); //здесь появляется лишний пустой элемент 

shuffle(first);
shuffle(second);
shuffle(third);

// скдадывание перемешаных карт в стопках по очереди: снизу третья сверху первая.

let readyStack = third.concat(second, first)

console.log(first)
console.log(typeof firstStage)
console.log(second)
console.log(third)
console.log(readyStack)

// !открытие поочередно карт из получившейся колоды. !!!ДОписать цикл повторения удаления крайнего элемента

readyStack.pop() // показать картинку этого удаленного элемента 

console.log(readyStack)



// связь трекера оставшихся карт с уже открытыми картами.