// window.onload = document.querySelector('.loader').style.display = "none";


document.querySelectorAll('.nav-button').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById("click").checked = false;
        document.getElementById("resume").classList.remove("hide");
    })
});

//============================= Typing Effect============================================== 

function wait(ms) {
    // const x = ms*j;
    return new Promise(resolve => setTimeout(resolve, ms))
  }
// function wait(ms) {
//     var start = new Date().getTime();
//     var end = start;
//     while (end < start + ms) {
//         end = new Date().getTime();
//     }
// }
var i = 0, j = 0;
var txt = [ 'software engineer', 'Competitive coder', 'Web Developer']; 
var speed = 50; 
function typeWriter() {
    if (i < txt[j].length) {
        document.getElementById("typing").innerHTML += txt[j].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (j < txt.length - 1) {
        wait(3000);
        j++;
        i = 0;
        document.getElementById("typing").innerHTML = "";
        setTimeout(typeWriter, speed);
    } else {
        wait(5000);
        document.getElementById("typing").innerHTML = "";
        j = 0;
        i = 0;
        setTimeout(typeWriter, speed);
    }
}
setTimeout(typeWriter, 0);

//======================================= Tabs Effect========================================= 

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
//  Show a tab by default
document.getElementById("defaultOpen").click();


// ===================================== Dark mode button  ====================
const darkButton = document.getElementById("dark-mode-icon");

darkButton.onclick = () => {
    document.body.classList.toggle('dark-mode');
    darkButton.classList.toggle('dark-icon');
    darkButton.classList.toggle('light-icon');
}

// window.onload = ()=>{
//     darkButton.click();     // open dark mode by default
// };

// ======================= project display slider =================


let projectOne = document.querySelector("#project1-img");
let projectTwo = document.querySelector("#project2-img");
let projectThree = document.querySelector("#project3-img");
let frame = document.querySelector("#project-display-container").offsetWidth;
let index = 0;
let increment = 1;
function slide(card) {
    frame = document.querySelector("#project-display-container").offsetWidth;
    index = index + increment;
    if (index >= 2) increment = -1;
    if (index <= 0) increment = 1;
    card.style.transitionDuration = "0.5s";
    card.style.transform = `translateX(-${(frame - 0) * index}px)`;
}
setInterval(() => { slide(projectOne) }, 4000);
setInterval(() => { slide(projectTwo) }, 4000);
setInterval(() => { slide(projectThree) }, 4000);