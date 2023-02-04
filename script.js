// global properties to use in our script
generateCards()
let startButton = document.getElementById("start-clear-button")
let timerValue = document.getElementById("timer")
let resultLine = document.getElementById("result-count") 
let oneMin = 10
let num = !NaN

// adding background image for all card ellements here, istead of .css file
function generateCards(){
    let cards = document.querySelectorAll(".card")
    for(let card of cards){
        card.style.backgroundImage = "url('./images/backCardImg.jpg')"
        card.style.backgroundSize = "95% 95%"
        card.style.backgroundRepeat =  "no-repeat" 
    }
}


// time counting function with start button
startButton.addEventListener('mousedown', function() {
    interval = setInterval(myTimer, 1000);
  });

function myTimer() {
    oneMin = oneMin-1;
    timerValue.innerHTML = oneMin + " sec"
    if(oneMin == 0){
        oneMin = 10
        timerValue.innerHTML = "Try more"
        clearInterval(interval)
    }
}

// random digits generator
function randomDigits(){
    num =  Math.floor(Math.random() * 20)
    console.log(num);
}
randomDigits()
 
//adding numbers for fliping cards
function addNumbersToCards(){
    let cards = document.querySelectorAll(".card")
    for(let card of cards){
         card.addEventListener('mousedown', flipCards) 
    }
}

// function flipCards(){
// let backSide = document.createElement("div")
// let backSideNum = document.createTextNode(num)
// backSide.appendChild(backSideNum)

// }
