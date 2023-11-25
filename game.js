// let isPhone = false;

// if('ontouchstart' in window){
//     isPhone = true;
// }

// if(isPhone){
//     document.addEventListener('touchstart', handleTouchStart);
//     document.addEventListener('touchend', handleTouchEnd);
// } 
// else{
//     document.addEventListener('keydown',handleKeyDown);
// }



let score = 0;
jump = true;


    const audio = new Audio('./assets/Background.mp3')
    audio.play()
    audio.loop = true;

window.addEventListener("reload", function () {
    audio.play()
    audio.loop = true;
});

let hunter = document.querySelector('.hunter')
hunter.classList.add('hunterMove')

document.onclick=()=>{
        kangaroo = document.querySelector('.kangaroo');
        kangaroo.classList.add('animatekangaroo');

        audioForKangaroo = new Audio('./assets/Yay.mp3')
        audioForKangaroo.play()

        setTimeout(() => {
            kangaroo.classList.remove('animatekangaroo')
        }, 700);
}

document.onkeydown = function (e) {
    console.log("Code is", e.keyCode)

    if (e.keyCode == 32) {
        kangaroo = document.querySelector('.kangaroo');
        kangaroo.classList.add('animatekangaroo');

        let audioForKangaroo = new Audio('./assets/Yay.mp3')
        audioForKangaroo.play()

        setTimeout(() => {
            kangaroo.classList.remove('animatekangaroo')
        }, 700);

    }

    if (e.keyCode == 39) {
        kangaroo = document.querySelector('.kangaroo');
        kangarooX = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('left'));
        kangaroo.style.left = kangarooX + 112 + "px";
    }

    if (e.keyCode == 37) {
        kangaroo = document.querySelector('.kangaroo');
        kangarooX = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('left'));
        kangaroo.style.left = (kangarooX - 112) + "px";
    }
}


setInterval(() => {
    kangaroo = document.querySelector('.kangaroo');
    endGame = document.querySelector('.endGame');
    hunter = document.querySelector('.hunter');


    kx = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('left'));
    ky = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('top'));

    hx = parseInt(window.getComputedStyle(hunter, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(hunter, null).getPropertyValue('top'));

    offSetX = Math.abs(kx - hx);
    offSetY = Math.abs(ky - hy);

    // console.log(offSetX, offSetY);

    if (offSetX < 150 && offSetY < 52) {
        endGame.style.visibility = 'visible';
        hunter.classList.remove('hunterMove');
        
        let Caught = new Audio('./assets/OH-NO.mp3');
        Caught.volume = 1.0;
        Caught.play();

        Caught.addEventListener('ended', function() {
            localStorage.setItem('score', score)
        window.location.href = 'win.html';

    });
}

    else if (offSetX < 70 && jump) {
        score += 10;
        increaseScore(score);
        jump = false;
        setTimeout(() => {
            jump = true;
        }, 1000);


        setTimeout(() => {
            moveDur = parseFloat(window.getComputedStyle(hunter, null).getComputedStyle('move-duration'));
            newDur = moveDur - 0.2;
            hunter.style.moveDuration = newDur + 's';
        }, 500);

    }

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;


    // offset change for viewport change
    if (windowWidth < 700 && windowHeight < 500) {
        // console.log('it works')
        // console.log(offSetX,offSetY)
        if (offSetX < 50 && offSetY <= 60 ) {
            endGame.style.visibility = 'visible';
            hunter.classList.remove('hunterMove');
            
            Caught = new Audio('./assets/OH-NO.mp3');
            Caught.volume = 1.0;
            Caught.play();
    
            Caught.addEventListener('ended', function() {
                localStorage.setItem('score', score)
            window.location.href = 'win.html';
    
        });
    }
    
        else if (offSetX < 30 && jump) {
            score += 10;
            increaseScore(score);
            jump = false;
            setTimeout(() => {
                jump = true;
            }, 1000);
    
    
            setTimeout(() => {
                moveDur = parseFloat(window.getComputedStyle(hunter, null).getComputedStyle('move-duration'));
                newDur = moveDur - 0.2;
                hunter.style.moveDuration = newDur + 's';
            }, 500);
        }}

}, 10)

function increaseScore(score) {
    document.querySelector('.score').innerHTML = "Your score: " + score;
}

increaseScore(score);


let timer = document.getElementById('timer')
let timerId;
let time = 60 ;
timer.innerText = time;

timerId = setInterval(function () {
    time--
    timer.innerText = time + ' s'
    if (time == 0) {
        clearInterval(timerId)
        localStorage.setItem('score', score)
        location.href = './win.html'
    }

}, 1000)



