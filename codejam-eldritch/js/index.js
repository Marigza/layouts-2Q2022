

import { blueCardsData, greenCardsData, brownCardsData } from './data.js';
//console.log(blueCardsData[1].src);

// выбор древнего. реализация не доделана...
/*
const ancient = Array.from(document.querySelectorAll('.ancient'))
const activAncient = document.querySelector('.ancient-active')
function selectAncient() {
    for (let item of ancient) {
        item.addEventListener('click', () => {
                item.classList.add('ancient-active')
                console.log(item)
            })
        }
    }
      
selectAncient()
*/
// установка трека в зависимости от имени древнего

// выбор уровня сложности

// отбор карт в зависимости от уровня сложности

// замес колоды

const mixingDeck = document.querySelector('.button')
const closeCard = document.querySelector('.close')
const openCard = document.querySelector('.open')

console.log(mixingDeck)

function mixTheDeck() {
    mixingDeck.classList.add('button-active')
    closeCard.classList.remove('close')
    openCard.classList.remove('close')
    closeCard.classList.add('close-active')
    openCard.classList.add('close-active')
}

mixingDeck.addEventListener('click', mixTheDeck)

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
//console.log(newGreen)

shuffle(blue);
let newBlue = blue.slice(0, blueSum)
shuffle(newBlue);
//console.log(newBlue)

shuffle(brown);
let newBrown = brown.slice(0, brownSum)
shuffle(newBrown);
//console.log(newBrown)

// !!!отбор карт по цветам и количеству в первую стадию. перемешивание этих карт.

const firstStage = newGreen.slice(0, azatot[0].greenCards) + ',' + newBlue.slice(0, azatot[0].blueCards) + ',' + newBrown.slice(0, azatot[0].brownCards)
const secondStage = newGreen.slice(azatot[0].greenCards, azatot[1].greenCards + azatot[0].greenCards) + ',' + newBlue.slice(azatot[0].blueCards, azatot[1].blueCards + azatot[0].blueCards) + ',' + newBrown.slice(azatot[0].brownCards, azatot[1].brownCards + azatot[0].brownCards)
const thirdStage = newGreen.slice(azatot[1].greenCards + azatot[0].greenCards, azatot[2].greenCards + azatot[1].greenCards + azatot[0].greenCards) + ',' + newBlue.slice(azatot[1].blueCards + azatot[0].blueCards, azatot[2].blueCards + azatot[1].blueCards + azatot[0].blueCards) + ',' + newBrown.slice(azatot[1].brownCards + azatot[0].brownCards, azatot[2].brownCards + azatot[1].brownCards + azatot[0].brownCards)

//console.log(firstStage)

let first = firstStage.split(',');
let second = secondStage.split(',');
let third = thirdStage.split(','); 

function findEmptyElement(array) {
    if (array.includes('')) {
        let empty = array.indexOf('')
        array.splice(empty, 1)
    }
    return array;
}
findEmptyElement(first)
findEmptyElement(second)
findEmptyElement(third)

shuffle(first);
shuffle(second);
shuffle(third);

// скдадывание перемешаных карт в стопках по очереди: снизу третья сверху первая.

let readyStack = third.concat(second, first)

//console.log(first)
//console.log(second)
//console.log(third)

console.log(readyStack) //стек готовый к игре

// открытие поочередно карт из получившейся колоды. трекер окончания стадии

const image = openCard.querySelector('img')
const stage1 = document.querySelector('.first')
const stage2 = document.querySelector('.second')
const stage3 = document.querySelector('.third')
let visibleCard;


function showCurrentCard() {
    if (readyStack.length !== 0) {
        visibleCard = readyStack.pop()
        image.src = `./assets/MythicCards/${visibleCard}.jpg`;
            if (readyStack.length === second.length + third.length) {
                stage1.classList.add('stage_is_over');
            } else if (readyStack.length === third.length) {
                stage2.classList.add('stage_is_over')
            }
        //console.log(visibleCard)
        //console.log(readyStack.length)
        return visibleCard
    } else {
        stage3.classList.add('stage_is_over')
        return closeCard.textContent = 'Empty';
    }
}

closeCard.addEventListener('click', showCurrentCard)

// связь трекера оставшихся карт с уже открытыми картами.
const cardInGameGreen1 = document.querySelector('.green1')
const cardInGameBrown1 = document.querySelector('.brown1')
const cardInGameBlue1 = document.querySelector('.blue1')
 
/*function scanColorOfCard(color) {
    if
}*/