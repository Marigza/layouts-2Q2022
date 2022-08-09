const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greet = document.querySelector('.greeting');
const userName = document.querySelector('.name');
const body = document.querySelector('body');
let randomNum;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');




function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    //randomNum = (Math.floor(Math.random() * (max - min + 1)) + min).padStart(2, "0");
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

randomNum = getRandomNum(1, 20)
//console.log(randomNum)


function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const currentDate = date.toLocaleDateString('en-US', options);
    day.textContent = currentDate;
}

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours >= 0 && hours < 6) {
        return timeOfDay = 'night'
    } else if (hours >= 6 && hours < 12) {
        return timeOfDay = 'morning'
    } else if (hours >= 12 && hours < 18) {
        return timeOfDay = 'afternoon'
    } else if (hours >= 18 && hours < 24) {
        return timeOfDay = 'evening'
    }
}
function showGreeting() {
    greet.textContent = `Good ${getTimeOfDay()},`
}

function setBg() {
    let bgNum = String(randomNum).padStart(2, "0");
    let timeOfDay = getTimeOfDay();

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
        img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
  }; 
    //return body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
}
//setBg()

console.log(setBg())

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    showGreeting();
}
showTime();

function setLocalStorage() {
    localStorage.setItem('userName', userName.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('userName')) {
        userName.value = localStorage.getItem('userName');
    }
}
window.addEventListener('load', getLocalStorage);

function getSlideNext() {
    if (randomNum < 20) {
        randomNum = randomNum + 1
    } else if (randomNum === 20) {
        randomNum = 1
    }
    setBg()
    //console.log(randomNum)
    //console.log(setBg())
}
slideNext.addEventListener('click', getSlideNext)

function getSlidePrev() {
    if (randomNum > 1) {
        randomNum = randomNum - 1
    } else if (randomNum === 1) {
        randomNum = 20
    }
    setBg()
    //console.log(randomNum)
    //console.log(setBg())
}
slidePrev.addEventListener('click', getSlidePrev)