// making the playAgain button functional
let win= document.getElementById('playagain');
win.onclick=()=>{
    location.href = 'game.html'
}

// audio for congratulations
function playWinAudio(){
const winAudio = new Audio('./assets/Congratulations.mp3');
winAudio.play()
}
playWinAudio()

// extracting the name of the player and displaying it on the gameover page
const playerName = localStorage.getItem('box2');
document.getElementById('box3').innerHTML = playerName

// extracting the score of the player and displaying it on the gameover page
const score = localStorage.getItem('score')
document.getElementById('scoregot').innerHTML = score

// making the home icon functional
let home=document.getElementById('homeicon');
home.onclick=()=>{
    location.href='index.html'
}

// storing different messages
const msg = ["Yippee!","GameOver!","Ready to win again?","Reload Fun!","Well Done!","Bravo!Superb!","Oh No!"]

// displaying different messages
function randomMsg(){
    const randomIndex = Math.floor(Math.random()*msg.length);
    return msg[randomIndex];
};

function GameOver() {
    const phrase = document.getElementById('message');
    const result = randomMsg();
    message.textContent = `${result}`;
}
GameOver();