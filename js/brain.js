let count = 1; 
let slide = document.getElementById("slide");

document.getElementById("down").onclick = () => {
    if(count < 5){
        let sub= document.getElementById(`s${count}`);
        sub.style.animationName="slide-down";
        document.getElementById(`d${count}`).style.animationName="dot-out";
        document.getElementById(`s${count+1}`).style.animationName="scroll-up";
        document.getElementById(`d${count+1}`).style.animationName="dot-in";
        count++;
    } else{count++;}
    if(count == 6) {
        count = 1;
        let sub= document.getElementById(`s${5}`);
        sub.style.animationName="slide-down";
        document.getElementById(`d${5}`).style.animationName="dot-out";
        document.getElementById(`s${1}`).style.animationName="scroll-up";
        document.getElementById(`d${1}`).style.animationName="dot-in";
    }
};
document.getElementById("up").onclick = () => {
    if(count>1){
        let sub= document.getElementById(`s${count}`);
        sub.style.animationName="slide-up";
        document.getElementById(`d${count}`).style.animationName="dot-out";
        document.getElementById(`s${count-1}`).style.animationName="scroll-down";
        document.getElementById(`d${count-1}`).style.animationName="dot-in";
        count--;
    }else{count--;}
    if(count == 0) {
        count = 5;
        let sub= document.getElementById(`s${1}`);
        sub.style.animationName="slide-up";
        document.getElementById(`d${1}`).style.animationName="dot-out";
        document.getElementById(`s${5}`).style.animationName="scroll-down";
        document.getElementById(`d${5}`).style.animationName="dot-in";
    }
};

let dots = document.querySelectorAll(".dot");
let slides = document.querySelectorAll(".project-card");
for (let i=0;i<=dots.length-1;i++) {
    let dot = dots[i];
    dot.onclick =() => {
        let curr = count;
        let clicked;
        clicked =i+1;
        if(clicked > curr) {
            let sub= document.getElementById(`s${curr}`);
            sub.style.animationName="slide-down";
            document.getElementById(`d${curr}`).style.animationName="dot-out";
            document.getElementById(`s${clicked}`).style.animationName="scroll-up";
            document.getElementById(`d${clicked}`).style.animationName="dot-in";
            count=clicked;
        }
        if(clicked < curr) {
            let sub= document.getElementById(`s${curr}`);
            sub.style.animationName="slide-up";
            document.getElementById(`d${curr}`).style.animationName="dot-out";
            document.getElementById(`s${clicked}`).style.animationName="scroll-down";
            document.getElementById(`d${clicked}`).style.animationName="dot-in";
            count=clicked;
        }
    }
}

let sectionsBlur = document.querySelectorAll(".about");
let introBlur = document.querySelector(".intro");
let nav = document.querySelector("nav");
let navlist = document.querySelector(".list") ;
let h1 = document.querySelector("h1");
nav.onmouseover = () => {
    for(let u=0 ; u<sectionsBlur.length;u++){
        sectionsBlur[u].style.filter ="blur(10px)";
    }
    introBlur.style.filter="blur(10px)";
    nav.setAttribute("class","nav_hover");
    nav.style.animationName="none";
    h1.setAttribute("class","h1_hover");
}
nav.onmouseleave = () => {
    for(let u=0 ; u<sectionsBlur.length;u++){
        sectionsBlur[u].style.filter ="blur(0px)";
    }
    introBlur.style.filter="blur(0px)";
    nav.style.animationName="nav-move";
    nav.removeAttribute("class");
    h1.removeAttribute("class");
}
navlist.onclick = () => {
    for(let u=0 ; u<sectionsBlur.length;u++){
        sectionsBlur[u].style.filter ="blur(0px)";
    }
    introBlur.style.filter="blur(0px)";
    nav.style.animationName="nav-move";
    nav.removeAttribute("class");
}



let arrowIcon = document.querySelector(".arrow a i");
let arrowA1 = document.querySelector(".arrow a");
let arrowPara =document.querySelector(".arrow p");
let contact = document.querySelector(".list #li5");
arrowA1.onclick = () => {
    if(window.location.hash === "#section1" || window.location.hash === "#section2" || window.location.hash === "#section3" || window.location.hash === "#section4" || window.location.hash === ""){
        setTimeout(function() {
            arrowIcon.setAttribute("class","fa-solid fa-angles-up");
            arrowPara.innerHTML.replace("Scroll Up");
            arrowA1.setAttribute("href","#section1");
        },550)  
    }
    else if (window.location.hash === "#section5") {
        setTimeout(function() {
            arrowIcon.setAttribute("class","fa-solid fa-angles-down");
            arrowPara.innerHTML.replace("Scroll down");
            arrowA1.setAttribute("href","#section5");
        },550)
    }
}
setInterval(function() {
    if(window.pageYOffset >= 2600) {
        arrowIcon.setAttribute("class","fa-solid fa-angles-up");
            arrowPara.innerHTML.replace("Scroll Up");
            arrowA1.setAttribute("href","#section1");
            arrowPara.innerHTML="Scroll Up";
    }else {
        arrowIcon.setAttribute("class","fa-solid fa-angles-down");
            arrowPara.innerHTML.replace("Scroll down");
            arrowA1.setAttribute("href","#section5");
            arrowPara.innerHTML="Scroll Down";
    }
},200)