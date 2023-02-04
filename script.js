generateCards()

function generateCards(){
    let cards = document.querySelectorAll(".card")
    console.log(cards)
    for(let card of cards){
        card.style.backgroundImage = "url('./images/backCardImg.jpg')"
        card.style.backgroundSize = "95% 95%"
        card.style.backgroundRepeat =  "no-repeat" 
    }
}