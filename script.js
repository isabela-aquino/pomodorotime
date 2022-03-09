let TIMER = null;
let TIME_IN_SECONDS

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const theme = window.localStorage.getItem("theme");

playButton.addEventListener('click', startCounter);
pauseButton.addEventListener('click', pauseCounter);
resetButton.addEventListener('click', resetCounter);

if (theme === "dark-mode") document.body.classList.add("dark-mode");

function workPomodoro(){
    const INITIAL_TIME_IN_SECONDS = 25 * 60;
    TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
    updateDom();
}

function breakPomodoro(){
    const INITIAL_TIME_IN_SECONDS = 5 * 60;
    TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
    updateDom();
}

function startCounter(){

    if ((document.getElementById('minutes').innerHTML === '00') & (document.getElementById('seconds').innerHTML === '00')){
        alert('Selecione o Tempo');
    }
    else{
        TIMER = setInterval( () =>{
            TIME_IN_SECONDS--;
            updateDom();
        },1000)
        
        playButton.disabled = true;
    }
    
}

function pauseCounter(){
    clearInterval(TIMER);
    playButton.disabled = false;
}

function resetCounter(){
    clearInterval(TIMER);
    const INITIAL_TIME_IN_SECONDS = 00;
    TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
    updateDom();
    playButton.disabled = false;
}

function updateDom(){
    const minutes = Math.floor(TIME_IN_SECONDS/60);
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2,0);

    const seconds = Math.floor(TIME_IN_SECONDS%60);
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2,0);
}

function darkMode() {
    var element = document.body;
    element.className = "dark-mode";
    window.localStorage.setItem("theme", "dark-mode");
  }

  function lightMode() {
    var element = document.body;
    element.className = "light-mode";
    window.localStorage.setItem("theme", "light-mode");
  }