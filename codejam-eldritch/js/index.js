console.log('Pеализация:\n-Карты замешиваются согласно правилам игры\n-Есть трекер текущего состояния колоды\n-Одна карта древнего\n-Один уровень сложности\n-Также в консоль выведен массив карт, которые играют в партии, старт с последнего элемента')

// выбор древнего.

const ancient = Array.from(document.querySelectorAll('.ancient'))

const azathot = [{
    greenCards: 1,
    blueCards: 1,
    brownCards: 2,
},
{
    greenCards: 2,
    blueCards: 1,
    brownCards: 3,
},
{
    greenCards: 2,
    blueCards: 0,
    brownCards: 4,
    }];

const cthulthu = [{
    greenCards: 0,
    blueCards: 2,
    brownCards: 2,
},
{
    greenCards: 1,
    blueCards: 0,
    brownCards: 3,
},
{
    greenCards: 3,
    blueCards: 0,
    brownCards: 4,
    }];

const cardInGameGreen1 = document.querySelector('.green1')
const cardInGameBrown1 = document.querySelector('.brown1')
const cardInGameBlue1 = document.querySelector('.blue1')

const cardInGameGreen2 = document.querySelector('.green2')
const cardInGameBrown2 = document.querySelector('.brown2')
const cardInGameBlue2 = document.querySelector('.blue2')

const cardInGameGreen3 = document.querySelector('.green3')
const cardInGameBrown3 = document.querySelector('.brown3')
const cardInGameBlue3 = document.querySelector('.blue3')

let currentAncient = azathot
//let currentAncient = cthulthu

cardInGameGreen1.textContent = currentAncient[0].greenCards
cardInGameBrown1.textContent = currentAncient[0].brownCards
cardInGameBlue1.textContent = currentAncient[0].blueCards
cardInGameGreen2.textContent = currentAncient[1].greenCards
cardInGameBrown2.textContent = currentAncient[1].brownCards
cardInGameBlue2.textContent = currentAncient[1].blueCards
cardInGameGreen3.textContent = currentAncient[2].greenCards
cardInGameBrown3.textContent = currentAncient[2].brownCards
cardInGameBlue3.textContent = currentAncient[2].blueCards

// установка трека в зависимости от имени древнего

// выбор уровня сложности

// отбор карт в зависимости от уровня сложности

// замес колоды

const mixingDeck = document.querySelector('.button')
const closeCard = document.querySelector('.close')
const openCard = document.querySelector('.open')

function mixTheDeck() {
    mixingDeck.classList.add('button-active')
    closeCard.classList.remove('close')
    openCard.classList.remove('open')
    closeCard.classList.add('close-active')
    openCard.classList.add('open-active')
}

mixingDeck.addEventListener('click', mixTheDeck)

// подсчет количества карт разных цветов для партии

const green = ['green1', 'green2', 'green3', 'green4', 'green5', 'green6', 'green7', 'green8', 'green9', 'green10', 'green11', 'green12', 'green13', 'green14', 'green15', 'green16', 'green17', 'green18'];
const blue = ['blue1', 'blue2', 'blue3', 'blue4', 'blue5', 'blue6', 'blue7', 'blue7', 'blue8', 'blue10', 'blue11', 'blue12',];
const brown = ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown6', 'brown7', 'brown8', 'brown9', 'brown10', 'brown11', 'brown12', 'brown13', 'brown14', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20', 'brown21',]

const greenSum = currentAncient[0].greenCards + currentAncient[1].greenCards + currentAncient[2].greenCards
const blueSum = currentAncient[0].blueCards + currentAncient[1].blueCards + currentAncient[2].blueCards
const brownSum = currentAncient[0].brownCards + currentAncient[1].brownCards + currentAncient[2].brownCards

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

// отбор карт по цветам и количеству в первую стадию. перемешивание этих карт.

const firstStage = newGreen.slice(0, currentAncient[0].greenCards) + ',' + newBlue.slice(0, currentAncient[0].blueCards) + ',' + newBrown.slice(0, currentAncient[0].brownCards)
const secondStage = newGreen.slice(currentAncient[0].greenCards, currentAncient[1].greenCards + currentAncient[0].greenCards) + ',' + newBlue.slice(currentAncient[0].blueCards, currentAncient[1].blueCards + currentAncient[0].blueCards) + ',' + newBrown.slice(currentAncient[0].brownCards, currentAncient[1].brownCards + currentAncient[0].brownCards)
const thirdStage = newGreen.slice(currentAncient[1].greenCards + currentAncient[0].greenCards, currentAncient[2].greenCards + currentAncient[1].greenCards + currentAncient[0].greenCards) + ',' + newBlue.slice(currentAncient[1].blueCards + currentAncient[0].blueCards, currentAncient[2].blueCards + currentAncient[1].blueCards + currentAncient[0].blueCards) + ',' + newBrown.slice(currentAncient[1].brownCards + currentAncient[0].brownCards, currentAncient[2].brownCards + currentAncient[1].brownCards + currentAncient[0].brownCards)

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

console.log(readyStack) //стек готовый к игре

// открытие поочередно карт из получившейся колоды. трекер окончания стадии, связь трекера оставшихся карт с уже открытыми картами.

const image = openCard.querySelector('img')
const stage1 = document.querySelector('.first')
const stage2 = document.querySelector('.second')
const stage3 = document.querySelector('.third')
let visibleCard;

function scanColorOfCard() {
    while (readyStack.length >= second.length + third.length) {
        switch (visibleCard[2]) {
            case 'o': return cardInGameBrown1.textContent = Number(cardInGameBrown1.textContent) - 1;
            case 'u': return cardInGameBlue1.textContent = Number(cardInGameBlue1.textContent) - 1;
            case 'e': return cardInGameGreen1.textContent = Number(cardInGameGreen1.textContent) - 1;
        }
    }
    while (readyStack.length >= third.length) {
        switch (visibleCard[2]) {
            case 'o': return cardInGameBrown2.textContent = Number(cardInGameBrown2.textContent) - 1;
            case 'u': return cardInGameBlue2.textContent = Number(cardInGameBlue2.textContent) - 1;
            case 'e': return cardInGameGreen2.textContent = Number(cardInGameGreen2.textContent) - 1;
        }
    }
    while (readyStack.length >= 0) {
        switch (visibleCard[2]) {
            case 'o': return cardInGameBrown3.textContent = Number(cardInGameBrown3.textContent) - 1;
            case 'u': return cardInGameBlue3.textContent = Number(cardInGameBlue3.textContent) - 1;
            case 'e': return cardInGameGreen3.textContent = Number(cardInGameGreen3.textContent) - 1;
        }
    }
}

function showCurrentCard() {
    if (readyStack.length > 0) {
        visibleCard = readyStack.pop()
        image.src = `./assets/MythicCards/${visibleCard}.jpg`;
            if (readyStack.length === second.length + third.length) {
                stage1.classList.add('stage_is_over');
            } else if (readyStack.length === third.length) {
                stage2.classList.add('stage_is_over')
            }
        //console.log(visibleCard)
        scanColorOfCard()
        //console.log(readyStack.length)
        return visibleCard
    } else {
        stage3.classList.add('stage_is_over')
        return closeCard.textContent = 'Empty';
    }
}

closeCard.addEventListener('click', showCurrentCard) 
