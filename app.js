let gameSeq = [];
let userSeq = [];
let highestScore=0;
let btns = ["red","green","blue","yellow"];
let start = false;
let Level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(start==false){
        console.log("Game started");
        start = true;

        Levelup();
    }
})
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
      btn.classList.remove("gameflash"); 
    },250)

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash"); 
    },250)

}
function Levelup(){
    userSeq = [];
    Level++;
    h2.innerText = `Level ${Level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function chackAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(Levelup,1000);
        }
    }
    else{
        if(highestScore<=Level-1){
            highestScore = Level-1;
            
        }
        h2.innerHTML = `Game Over! Your score was <b>${Level-1}<b> <br>Press any key to start<br>Highest Score ${highestScore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150 )
       
        reset(); 
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    chackAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    gameSeq = [];
    userSeq = [];
    Level = 0;
    start = false;
}