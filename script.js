const hourE = document.querySelector('.hour')
const minuteE = document.querySelector('.minute')
const secondE = document.querySelector('.second')
const timeE = document.querySelector('.time')
const dateE = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggle.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML ='Dark mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'

    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours =time.getHours();
    const hourForClock = hours%12;
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const noon = hours >=12?'PM' :'AM';

    hourE.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`;
    minuteE.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondE.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

    timeE.innerHTML = `${hourForClock}:${minute<10? `0${minute}`:minute} ${noon}`
    dateE.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return (num -in_min) *(out_max -out_min) / (in_max-in_min)+out_min;
}

setTime()

setInterval(setTime, 1000)