
let minutes, seconds, counterInterval = undefined;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

resetCounter();

function workPomodoro(){
    minutes = 25;
    seconds = 00;
    updateCounterEl()
}

function breakPomodoro(){
    minutes = 05;
    seconds = 00;
    updateCounterEl()
}


function updateCounterEl(){
    minutesEl.innerHTML = minutes < 10 ? `0${minutes}`: minutes;
    secondsEl.innerHTML = seconds < 10 ? `0${seconds}`: seconds;
}

function startCounter(){
    if(counterInterval) return;

    counterInterval = setInterval(() => {
    if (seconds === 0){ 
        if (minutes === 0) return destroyInterval();;
        seconds = 59;
        --minutes;
    } 
    else{
        --seconds;
    }
    updateCounterEl();
    },1000)
}

function pauseCounter(){
    destroyInterval();
}

function destroyInterval(){
    clearInterval(counterInterval);
    counterInterval = undefined;
}

function resetCounter(){
    destroyInterval();
    minutes = 00;
    seconds = 00;
    updateCounterEl();
}