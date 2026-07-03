let homeScore = document.getElementById("score1")
let guestScore = document.getElementById("score2")

let finalhomeScore = 0
let finalguestScore = 0
function add1func(){
    finalhomeScore += 1
    homeScore.innerText = finalhomeScore
    console.log("1")
}
function add2func(){
    finalhomeScore += 2
    homeScore.innerText = finalhomeScore
    console.log("2")
}
function add3func(){
    finalhomeScore += 3
    homeScore.innerText = finalhomeScore
    console.log("3")
}

function add12func(){
   finalguestScore += 1
    guestScore.innerText = finalguestScore
    console.log("1")
}
function add22func(){
    finalguestScore += 2
    guestScore.innerText = finalguestScore
    console.log("2")
}
function add32func(){
    finalguestScore += 3
    guestScore.innerText = finalguestScore
    console.log("3")
}
function cclear(){
    homeScore.innerText = 0
    guestScore.innerText = 0
    console.log("clear")
}






