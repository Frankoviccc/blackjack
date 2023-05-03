// Declare variables and objects needed

let player = {
    name: "Frank",
    chips: "145"
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
// Store the html elements in variables to get acces

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
// Create function that returns a random number

function getRandomCard() {
    let randomNumber = Math.ceil(Math.random() * 13)
    if(randomNumber === 1){
        return 11
    } else if(randomNumber > 10){
        return 10
    }
    return randomNumber
}

// Create a function that starts game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
// Create function that renders the game with blackjack rules

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}
// Create function that offers new cards

function newCard() {
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
    }
} 
