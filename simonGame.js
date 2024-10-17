let gameSeq = [];

let userSeq = [];

let btns = ["red", "yellow", "green", "blue"];

let started = false;

let level = 0;

let h2 = document.querySelector("h2");



document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is Start Now");
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 400);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 400);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);  
   gameSeq.push(randColor);
   console.log(gameSeq); // for gameSeq color Hint:
   gameFlash(randBtn);
}

function checkAns(idx) {
    //console.log("curr level : ", level);

    if (userSeq[idx] === gameSeq[idx]) {
       //console.log("Same Value");
       if (userSeq.length == gameSeq.length) {
          setTimeout(levelUp, 500);
       }
    } else {
        h2.innerHTML = `Game Over! your Score Was <b>${level}</b> Please Press Any Key To Restart Your Game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }  
}

function btnPress() {
    // console.log(this);  
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
    
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

