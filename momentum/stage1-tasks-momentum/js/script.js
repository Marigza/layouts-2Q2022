const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greet = document.querySelector('.greeting');
const userName = document.querySelector('.name');
const body = document.querySelector('body');
let randomNum;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');
let randomQuote;
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteBtn = document.querySelector('.change-quote');


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
    img.src = `https://raw.githubusercontent.com/Marigza/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
        img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
  };    
}

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

async function getWeather() {
    try { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=86e7c7a8410c6c0c5a87c8fe4d2181f8&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherError.textContent = '';
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)}m/s`;
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
    }
    catch (error) {
        weatherError.textContent = `Error! city not found for '${city.value}'!`
        temperature.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
        //console.log(error)
    }
    //console.log(url);
}

function setLocalStorageCity() {
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorageCity);

let userCity = city.value;
function getLocalStorageCity() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        getWeather();
    }
}
window.addEventListener('load', getLocalStorageCity);

//console.log(city.value)

city.addEventListener('change', () => { getWeather() });

async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    //console.log(data);
    randomQuote = getRandomNum(0, 1642);

    quote.textContent = data[randomQuote].text;
    author.textContent = data[randomQuote].author;
}
getQuotes();

changeQuoteBtn.addEventListener('click', getQuotes);
window.addEventListener('load', getQuotes);

    