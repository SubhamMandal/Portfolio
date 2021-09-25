document.querySelectorAll('.nav-button').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById("click").checked = false;
        document.getElementById("resume").classList.remove("hide");
    })
});

// document.getElementById('skills').addEventListener('click',()=>{
//     window.scrollTo(0, 100);
// })

document.getElementById("click").addEventListener('click',()=>{
    if(document.getElementById("click").checked == true){
        document.getElementById("resume").classList.add("hide");
    }
    else document.getElementById("resume").classList.remove("hide");
});

// Typing Effect 


function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
var i = 0, j = 0;
var txt = ['', 'software engineer','Competitive coder','Web Developer']; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
    if (i < txt[j].length) {
        document.getElementById("typing").innerHTML += txt[j].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (j < txt.length - 1) {
        wait(1000);
        j++;
        i = 0;
        document.getElementById("typing").innerHTML = "";
        setTimeout(typeWriter, speed);
    } else {
        wait(1000);
        document.getElementById("typing").innerHTML = "";
        j = 0;
        i = 0;
        setTimeout(typeWriter, speed);
    }
}
// setTimeout(typeWriter, 1000);
