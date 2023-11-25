let counter = document.getElementById('counter')
let counterId;
let count = 3
counter.innerText = count

counterId = setInterval(function () {
    count--
    counter.innerText = count;

    if (count == 0) {
        clearInterval(counterId)
        let script = document.createElement('script')
         script.src= 'game.js'
        document.body.appendChild(script)
    

    counter.style.visibility = 'hidden';

    }

}, 1000)


    
