const secondsField = document.getElementById('seconds');
const minutesField = document.getElementById('minutes');
const hoursField = document.getElementById('hours');
const daysField = document.getElementById('days');
const nextYearField = document.getElementById('year');


const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

nextYearField.textContent = nextYear;

const updateCountdow = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    secondsField.textContent = seconds < 10 ? '0' + seconds : seconds;
    minutesField.textContent = minutes < 10 ? '0' + minutes : minutes;
    hoursField.textContent = hours < 10 ? '0' + hours : hours;
    daysField.textContent = days < 10 ? '0' + days : days;
}

setInterval(updateCountdow, 0);



