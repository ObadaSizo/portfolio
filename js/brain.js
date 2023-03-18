let count = 1; 
let slide = document.getElementById("slide");

document.getElementById("down").onclick =function() {
    if(count<4){
        let sub= document.getElementById(`s${count}`);
        sub.style.animationName="slide-down";
        document.getElementById(`d${count}`).style.animationName="dot-out";
        document.getElementById(`s${count+1}`).style.animationName="scroll-up";
        document.getElementById(`d${count+1}`).style.animationName="dot-in";
        count++;
    }
};
document.getElementById("up").onclick =function() {
    if(count>1){
        let sub= document.getElementById(`s${count}`);
        sub.style.animationName="slide-up";
        document.getElementById(`d${count}`).style.animationName="dot-out";
        document.getElementById(`s${count-1}`).style.animationName="scroll-down";
        document.getElementById(`d${count-1}`).style.animationName="dot-in";
        count--;
    }
};

