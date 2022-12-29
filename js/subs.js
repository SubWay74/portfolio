const projectEl = document.getElementById("my-projects");

const projects = [
    {
        img: "/img/restaurant.webp",
        h1: "Restaurant site",
        discreption: "one of my friends is dreaming about owning a restaurant and that inspire me to make him a very simple site just for a start for his and my future career",
        link: "https://subway74.github.io/Restaurant-site/",
    },
    {
        img: "/img/emailTemp.webp",
        h1: "HTML eamil templates",
        discreption: "Made this HTML-Email-Templates for a client on upwork just for an interveiw",
        link: "https://github.com/SubWay74/HTML-Email-Template",
    },
    {
        img: "/img/games.webp",
        h1: "Mini-games",
        discreption: "I honed JS  skills by building small games to learn more about the logices and it helped me solving some problems ",
        link: "https://github.com/SubWay74?tab=repositories",
    },
]

for (let i = 0; i < projects.length; i++) {
    const container = document.createElement("div");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const discreption = document.createElement("p");
    const button = document.createElement("button");
    const link = document.createElement("a");

    img.setAttribute("src", projects[i].img);
    h1.innerText = projects[i].h1;
    discreption.innerText = projects[i].discreption;
    link.innerText = "Learn More";
    link.setAttribute("href", projects[i].link)
    button.appendChild(link)

    container.appendChild(img)
    container.appendChild(h1)
    container.appendChild(discreption)
    container.appendChild(button)
    projectEl.appendChild(container)
}

const skillsEl = document.getElementById("my-skills");

const mySkills = [
    {
        name: "HTML",
        logo: "/img//HTML.webp"
    },
    {
        name: "CSS",
        logo: "/img/CSS.webp"
    },
    {
        name: "SASS",
        logo: "/img/SASS.webp"
    },
    {
        name: "BootStrap",
        logo: "/img/BootStrap.webp"
    },
    {
        name: "JavaScript",
        logo: "/img/JS.webp"
    },
    {
        name: "ReactJS",
        logo: "/img/ReactJS.webp"
    },
    {
        name: "Git",
        logo: "/img/Git.webp"
    },
    {
        name: "Photoshop",
        logo: "/img/photoshop.webp"
    },
    {
        name: "Figma",
        logo: "/img/figma.webp"
    }
] 

for(let i = 0; i< mySkills.length; i++){
    const container = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");

    img.setAttribute("src", mySkills[i].logo);
    p.innerText = mySkills[i].name;
    container.appendChild(img)
    container.appendChild(p)
    skillsEl.appendChild(container)
}

// ul links and scroll events
const homeBtn = document.getElementById("home");
const skillsBtn = document.getElementById("skills");
const projectBtn = document.getElementById("projects");

homeBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
skillsBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 360,
        behavior: "smooth"
    })
})
projectBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 600,
        behavior: "smooth"
    })
})

window.onscroll = function () {
    if (window.scrollY <= 350 ) {
        homeBtn.classList.add("active");
        projectBtn.classList.remove("active");
        skillsBtn.classList.remove("active");
    } else if (window.scrollY >= 350 && window.scrollY <= 460) {
        homeBtn.classList.remove("active");
        projectBtn.classList.remove("active");
        skillsBtn.classList.add("active");
    } else if (window.scrollY >= 460) {
        homeBtn.classList.remove("active");
        skillsBtn.classList.remove("active");
        projectBtn.classList.add("active");
    }
}




// // TESTONE

// let start = 0;
// let count = document.getElementById("count-el");
// let incremBtn = document.getElementById("increment-btn");
// let errorP = document.getElementById("error")

// count.innerText = start;

// incremBtn.addEventListener("click", function () {
//     count.innerText = start += 1;
//     errorP.innerText = "";
// });

// let DecremBtn = document.getElementById("Decrement-btn");

// DecremBtn.addEventListener ("click", function De() {
//     if (count.innerText > 0) {
//         count.innerText = start -= 1;
//         errorP.innerText = "";
//     } else {
//         this.removeEventListener
//         errorP.innerText = "We cant count people who're under the Number 0!!";
//     }
// });


// let saveBtn = document.getElementById("save-btn");
// let welcomeP = document.getElementById("welcome-el");

// saveBtn.addEventListener("click", function ()  {
//     errorP.innerText = "";
//     if ( welcomeP.innerText === "Previous Entries:") {
//         welcomeP.innerText += " " + start;
//     } else {
//         welcomeP.innerText += " - " + start;
//     }
//     start = 0;
//     count.innerText = start;
// })

// let num1 = 8;
// let num2 = 2;


// let spanOne = document.getElementById("num-1");
// let spanTwo = document.getElementById("num-2");

// spanOne.innerText = num1;
// spanTwo.innerText = num2;

// let calcEqual = document.getElementById("equal");

// let addBtn = document.getElementById("add");
// let subBtn = document.getElementById("subtract");
// let diviBtn = document.getElementById("divide");
// let multiBtn = document.getElementById("multiply");

// addBtn.addEventListener("click", function add() {
//     calcEqual.innerText = num1 + num2;
// })
// subBtn.addEventListener("click", function sub() {
//     calcEqual.innerText = num1 - num2;
// })
// diviBtn.addEventListener("click", function divi() {
//     calcEqual.innerText = num1 / num2;
// })
// multiBtn.addEventListener("click", function multi() {
//     calcEqual.innerText = num1 * num2;
// })

// // TESTONE

// // TESTTWO

// let gameBtn = document.getElementById("start-btn");
// let gamestats = document.getElementById("play-stats");
// let cardEl = document.getElementById("cards");
// let sumEl = document.getElementById("sum");
// let cardBtn = document.getElementById("card-btn");
// let newGame = document.getElementById("newgame-btn");
// let playerEl = document.getElementById("player-el");

// let cards = []
// let hasBlackJack = false;
// let isAlive = false; // from true
// let sum = 0;

// // function to get a random card 

// function rollNumber() {
//     let rollRandom = Math.floor( Math.random()*13) + 1;
//     if (rollRandom === 1) {
//         return 11;
//     } else if (rollRandom >= 11) {
//         return 10;
//     } else {
//         return rollRandom;
//     }
// }

// //do a start function for the addEventlisteners
// function renderGame() {
//     if (sum < 21) {
//         gamestats.innerText = "Do you want to take another card?"
//     } else if (sum === 21) {
//         gamestats.innerText = "CONG, you wont the Blackjack";
//         hasBlackJack = true;
//         isAlive = false;
//     } else {
//         gamestats.innerText = "OOPS!, You're out..";
//         isAlive = false;
//     }
// }

// function startgamebtn() {
//     let firstCard = rollNumber();
//     let secCard = rollNumber();
//     cards = [firstCard, secCard]
//     sum = cards[0] + cards[1];
//     isAlive = true
//     if (isAlive === true) {
//         for (i = 0; i < cards.length; i++) {
//             cardEl.innerText += " " + cards[i];
//         }
//     } else {
//         return "";
//     }
//     sumEl.innerText += " " + sum;
//     gameBtn.innerText = "Playing..."
//     gameBtn.style.border = "1px solid rgb(117, 86, 8)";
//         // render the game rules
//     renderGame()
//     gameBtn.onclick = null;
// }

// function newCardBtn() {
//     if (isAlive === true) {
//         let newCard = rollNumber();
//         sum += newCard;
//         cards.push(newCard);
//         for (i = cards.length - 1; i < cards.length; i++) {
//             cardEl.innerText += " " + cards[i];
//         }
//         sumEl.innerText = "Sum: " + sum;
//         // render the game rules
//         renderGame()
//     } else {
//         // this.removeEventListener()
//         return "";
//     }
// }

// newGame.addEventListener("click", function () {
//     location.reload();
// })


// // TESTTHREE

// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const saveTabEl = document.getElementById("save-tab-btn");
// const ulEL = document.getElementById("leads-el");
// const deleteEl = document.getElementById("delete-btn");
// const tabBtn = document.getElementById("tab");

// let myLocation = location.href

// const myLeadsFronLS = JSON.parse(localStorage.getItem("myLeads"));

// if (Boolean(myLeadsFronLS) === true) {
//     myLeads = myLeadsFronLS;
//     render(myLeads)
// } 

// saveTabEl.addEventListener("click", function () {
//     if (inputEl.value === "") {
//         return "";
//     } else {
//         myLeads.push(inputEl.value); 
//         inputEl.value = "";
//         localStorage.setItem("myLeads", JSON.stringify(myLeads));
//         render(myLeads)
//     }
// })

// tabBtn.addEventListener("click", () => {
//     myLeads.push(location.href); 
//     inputEl.value = "";
//     localStorage.setItem("myLeads", JSON.stringify(myLeads));
//     render(myLeads)
// })




// function render(leads) {
//     let listItems = "";
//     for ( i = 0; i < leads.length; i++) {
//         listItems += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`;
//     }
//     ulEL.innerHTML = listItems;
// }

// deleteEl.addEventListener("dblclick", function () {
//     localStorage.clear();
//     myLeads = [];
//     render(myLeads)
//     // ulEL.innerText = "";
// })
