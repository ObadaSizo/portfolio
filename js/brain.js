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
console.log(dots);
console.log(slides);
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
