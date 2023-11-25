const rules=document.getElementById("text");

rules.onclick=()=>{
    window.location.href="./rules.html";
    const playerName = document.getElementById('nicknameid').value;
    localStorage.setItem('box2', playerName);
}



// location.href = 'game.html';