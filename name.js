
// extracting name and nickname entered by the user 
const rules=document.getElementById("text");
const UserName = document.getElementById("nicknameid");

// making onclick button
rules.onclick=()=>{
    if(UserName.value){
        window.location.href="./rules.html";

// giving an alert if the user forgets to enter nickname, therefore making the nickname input mandatory
    const playerName = document.getElementById('nicknameid').value;
    localStorage.setItem('box2', playerName);
    }
    else{
        alert("Enter NickName....");
    }   
}

