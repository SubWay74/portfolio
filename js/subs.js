let homeEl = document.getElementById("home");
let projectEl = document.getElementById("projects");
let aboutEl = document.getElementById("about");

homeEl.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
        
    });
})

projectEl.addEventListener("click", function () {
    window.scrollTo({
        top: 729,
        behavior: "smooth"
    })
})

aboutEl.addEventListener("click", function () {
    window.scrollTo({
        top: 2171,
        behavior:"smooth"
    });
})

window.onscroll = function () {
    console.log(window.scrollY)
    if (window.scrollY <= 700 ) {
        homeEl.classList.add("active");
        projectEl.classList.remove("active");
        aboutEl.classList.remove("active");
    } else if (window.scrollY >= 700 && window.scrollY <= 2169) {
        projectEl.classList.add("active");
        homeEl.classList.remove("active");
        aboutEl.classList.remove("active");
    } else if (window.scrollY >= 2170) {
        aboutEl.classList.add("active");
        homeEl.classList.remove("active");
        projectEl.classList.remove("active");
    }
}




// TESTONE

let start = 0;
let count = document.getElementById("count-el");
let incremBtn = document.getElementById("increment-btn");
let errorP = document.getElementById("error")

count.innerText = start;

incremBtn.addEventListener("click", function () {
    count.innerText = start += 1;
    errorP.innerText = "";
});

let DecremBtn = document.getElementById("Decrement-btn");

DecremBtn.addEventListener ("click", function De() {
    if (count.innerText > 0) {
        count.innerText = start -= 1;
        errorP.innerText = "";
    } else {
        this.removeEventListener
        errorP.innerText = "We cant count people who're under the Number 0!!";
    }
});


let saveBtn = document.getElementById("save-btn");
let welcomeP = document.getElementById("welcome-el");

saveBtn.addEventListener("click", function ()  {
    errorP.innerText = "";
    if ( welcomeP.innerText === "Previous Entries:") {
        welcomeP.innerText += " " + start;
    } else {
        welcomeP.innerText += " - " + start;
    }
    start = 0;
    count.innerText = start;
})

let num1 = 8;
let num2 = 2;


let spanOne = document.getElementById("num-1");
let spanTwo = document.getElementById("num-2");

spanOne.innerText = num1;
spanTwo.innerText = num2;

let calcEqual = document.getElementById("equal");

let addBtn = document.getElementById("add");
let subBtn = document.getElementById("subtract");
let diviBtn = document.getElementById("divide");
let multiBtn = document.getElementById("multiply");

addBtn.addEventListener("click", function add() {
    calcEqual.innerText = num1 + num2;
})
subBtn.addEventListener("click", function sub() {
    calcEqual.innerText = num1 - num2;
})
diviBtn.addEventListener("click", function divi() {
    calcEqual.innerText = num1 / num2;
})
multiBtn.addEventListener("click", function multi() {
    calcEqual.innerText = num1 * num2;
})

// TESTONE

// TESTTWO

let gameBtn = document.getElementById("start-btn");
let gamestats = document.getElementById("play-stats");
let cardEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let cardBtn = document.getElementById("card-btn");
let newGame = document.getElementById("newgame-btn");
let playerEl = document.getElementById("player-el");

let cards = []
let hasBlackJack = false;
let isAlive = false; // from true
let sum = 0;

// function to get a random card 

function rollNumber() {
    let rollRandom = Math.floor( Math.random()*13) + 1;
    if (rollRandom === 1) {
        return 11;
    } else if (rollRandom >= 11) {
        return 10;
    } else {
        return rollRandom;
    }
}

//do a start function for the addEventlisteners
function renderGame() {
    if (sum < 21) {
        gamestats.innerText = "Do you want to take another card?"
    } else if (sum === 21) {
        gamestats.innerText = "CONG, you wont the Blackjack";
        hasBlackJack = true;
        isAlive = false;
    } else {
        gamestats.innerText = "OOPS!, You're out..";
        isAlive = false;
    }
}

function startgamebtn() {
    let firstCard = rollNumber();
    let secCard = rollNumber();
    cards = [firstCard, secCard]
    sum = cards[0] + cards[1];
    isAlive = true
    if (isAlive === true) {
        for (i = 0; i < cards.length; i++) {
            cardEl.innerText += " " + cards[i];
        }
    } else {
        return "";
    }
    sumEl.innerText += " " + sum;
    gameBtn.innerText = "Playing..."
    gameBtn.style.border = "1px solid rgb(117, 86, 8)";
        // render the game rules
    renderGame()
    gameBtn.onclick = null;
}

function newCardBtn() {
    if (isAlive === true) {
        let newCard = rollNumber();
        sum += newCard;
        cards.push(newCard);
        for (i = cards.length - 1; i < cards.length; i++) {
            cardEl.innerText += " " + cards[i];
        }
        sumEl.innerText = "Sum: " + sum;
        // render the game rules
        renderGame()
    } else {
        // this.removeEventListener()
        return "";
    }
}

newGame.addEventListener("click", function () {
    location.reload();
})


// TESTTHREE

let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveTabEl = document.getElementById("save-tab-btn");
const ulEL = document.getElementById("leads-el");
const deleteEl = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab");

let myLocation = location.href

const myLeadsFronLS = JSON.parse(localStorage.getItem("myLeads"));

if (Boolean(myLeadsFronLS) === true) {
    myLeads = myLeadsFronLS;
    render(myLeads)
} 

saveTabEl.addEventListener("click", function () {
    if (inputEl.value === "") {
        return "";
    } else {
        myLeads.push(inputEl.value); 
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads)
    }
})

tabBtn.addEventListener("click", () => {
    myLeads.push(location.href); 
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads)
})




function render(leads) {
    let listItems = "";
    for ( i = 0; i < leads.length; i++) {
        listItems += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`;
    }
    ulEL.innerHTML = listItems;
}

deleteEl.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads)
    // ulEL.innerText = "";
})