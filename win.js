let win= document.getElementById('playagain');
win.onclick=()=>{
    location.href = 'game.html'
}

function playWinAudio(){

const winAudio = new Audio('./assets/Congratulations.mp3');
winAudio.play()
}
playWinAudio()

const playerName = localStorage.getItem('box2');
document.getElementById('box3').innerHTML = playerName

const score = localStorage.getItem('score')
document.getElementById('scoregot').innerHTML = score

let home=document.getElementById('homeicon');
home.onclick=()=>{
    location.href='home.html'
}


const msg = ["Yippee!","GameOver!","Ready to win again?","Reload Fun!","Well Done!","Bravo!Superb!","Oh No!"]

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