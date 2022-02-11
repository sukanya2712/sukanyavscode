const message=document.querySelectorAll(".message")
const button=document.querySelector("button")
const gameArea=document.querySelector(".gameArea")
const results=document.querySelector(".results")
const directions=document.querySelectorAll(".directions")

let inPlay=false;
let count=0;
let playArea={}

function showMessage(notification){
  message.innerhtml=`<h3>${notification}</h3>`
}

function random(number){
    let val=Math.floor(Math.random()*number)
    return val;
}

function myBox() {
   let element = document.createElement("div")
   element.classList.add("box");

   element.style.top=random(setTopMargin())+'px';
   element.style.left=random(setLeftMargin())+'px';

   element.style.backgroundColor=getcolor()
}



function showbox(){
   playArea.timer= setTimeout(myBox,random(4000))
}
showMessage("click start to begin")

button.addEventListener("click",function(){
   inPlay = true;
   button.style.display = "none"
   directions.style.display="none";
   results.innerhtml=''
   count=0;

   showMessage("starting...")
   showbox()
})