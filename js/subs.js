const projectEl = document.getElementById("my-projects");

const projects = [
    {
        img: "img/restaurant.webp",
        h1: "Restaurant site",
        discreption: "one of my friends is dreaming about owning a restaurant and that inspire me to make him a very simple site just for a start for his and my future career",
        link: "https://subway74.github.io/Restaurant-site/",
    },
    {
        img: "img/emailTemp.webp",
        h1: "HTML eamil templates",
        discreption: "Made this HTML-Email-Templates for a client on upwork just for an interveiw",
        link: "https://github.com/SubWay74/HTML-Email-Template",
    },
    {
        img: "img/games.webp",
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
        logo: "img//HTML.webp"
    },
    {
        name: "CSS",
        logo: "img/CSS.webp"
    },
    {
        name: "SASS",
        logo: "img/SASS.webp"
    },
    {
        name: "BootStrap",
        logo: "img/BootStrap.webp"
    },
    {
        name: "JavaScript",
        logo: "img/JS.webp"
    },
    {
        name: "ReactJS",
        logo: "img/ReactJS.webp"
    },
    {
        name: "Git",
        logo: "img/Git.webp"
    },
    {
        name: "Photoshop",
        logo: "img/photoshop.webp"
    },
    {
        name: "Figma",
        logo: "img/figma.webp"
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
