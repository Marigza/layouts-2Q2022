const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greet = document.querySelector('.greeting');
const userName = document.querySelector('.name');



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
    } else if (hours >= 12 && hours < 18) {
        return timeOfDay = 'evening'
    }
}
function showGreeting() {
    greet.textContent = `Good ${getTimeOfDay()},`
}

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