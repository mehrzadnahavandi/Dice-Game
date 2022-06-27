
const imag1 = document.getElementById("img1")
const imag2 = document.getElementById("img2")
const imag3 = document.getElementById("img3")
const imag4 = document.getElementById("img4")
const btnRoll = document.getElementById("btn-roll")
const btnReset = document.getElementById("btn-reset")

const yourscore = document.getElementById("your-score")
const yourtotal = document.getElementById("your-total-score")
const opponentscore = document.getElementById("opponent-score")
const opponenttotal = document.getElementById("opponent-total-score")

const rules = document.getElementById("rule-note")
const play = document.getElementById("play-note")
const winner = document.getElementById("winner")
const body = document.getElementById("body")
const popUp = document.getElementById("pop-up")
const $pop = $("#pop-up")
const $winner = $("#winner")
const btn = document.getElementsByTagName("button")
const $btn = $(".btn")
const closePopup = document.getElementById('close-pop-up');


// hiding aside
const $btnShow = $('#play');
const $textPlay = $('#play-note');
$btnShow.click(function(){
	$textPlay.slideToggle(500);
});

const $btnRule = $('#rule');
const $textRole = $('#rule-note');
$btnRule.click(function(){
	$textRole.slideToggle(500);
});




// random function number
function randNum (){
    randomNumber = Math.floor((Math.random() * 6) +1)
    return randomNumber
}


// dice class
class dice{
    constructor(randomNumber){
        this.randomNumber = randomNumber
    }

    number(){
        let randNum = this.randomNumber
        return randNum
    }

    describeSelf(){
        let diceImage = `images/dice${this.randomNumber}.png`;
        return diceImage
    }
}



// main game
let yourTotalScore = []
let opponentTotalScore = []

let round = 0
let lastRound = 3


btnRoll.addEventListener("click", function(e){

    // creating new dices
    const dice1 = new dice(randNum())
    console.log(dice1.describeSelf())
    console.log(dice1.number())

    const dice2 = new dice(randNum())
    console.log(dice2.describeSelf())
    console.log(dice2.number())

    const dice3 = new dice(randNum())
    console.log(dice3.describeSelf())
    console.log(dice3.number())

    const dice4 = new dice(randNum())
    console.log(dice4.describeSelf())
    console.log(dice4.number())

    // dice images
    imag1.setAttribute("src", dice1.describeSelf());
    imag1.setAttribute("alt", dice1.describeSelf());

    imag2.setAttribute("src", dice2.describeSelf());
    imag2.setAttribute("alt", dice2.describeSelf());

    imag3.setAttribute("src", dice3.describeSelf());
    imag3.setAttribute("alt", dice3.describeSelf());

    imag4.setAttribute("src", dice4.describeSelf());
    imag4.setAttribute("alt", dice4.describeSelf());

    let yourRoundScore 
    let opponentRoundScore 

    if( (dice1.number() == 1) || (dice2.number() == 1)  ) {
        yourRoundScore = 0
    }else if( (dice1.number() == dice2.number()) ){
        yourRoundScore = (dice1.number() + dice2.number()) * 2
    }else{
        yourRoundScore = dice1.number() + dice2.number()
    }



    if(   (dice3.number() == 1) || (dice4.number() == 1)) {
        opponentRoundScore = 0
    }else if( (dice3.number() == dice4.number()) ){
        opponentRoundScore = (dice3.number() + dice4.number()) * 2
    }else{
        opponentRoundScore = dice3.number() + dice4.number()
    }


    yourTotalScore.push(yourRoundScore)
    opponentTotalScore.push(opponentRoundScore)


    yourscore.innerHTML = ""
    opponentscore.innerHTML = ""
    yourtotal.innerHTML = ""
    opponenttotal.innerHTML = ""
    yourscore.innerHTML += `${yourRoundScore}`
    opponentscore.innerHTML += `${opponentRoundScore}`

    console.log(yourTotalScore)
    console.log(opponentTotalScore)
 
    let uTotal=0
    yourTotalScore.forEach(function(num){
        uTotal += num
        return uTotal
    })

    yourtotal.innerHTML += uTotal

    let oTotal = 0
    opponentTotalScore.forEach(function(num){
        oTotal += num
        return oTotal
    })

    opponenttotal.innerHTML += oTotal

    // winner
    round ++
    console.log("round", round)
    
    if(round == lastRound){
        $btn.prop('disabled', true);
        body.style.opacity = .35
        if(uTotal > oTotal){
            $pop.fadeIn();
            $winner.html(`you Won ${uTotal}`)
            console.log (`you Won ${uTotal}`)
        }else if(uTotal < oTotal){
            $pop.fadeIn();
            $winner.html(`Opponent Won ${oTotal}`)
            console.log (`Opponent Won ${oTotal}`)
        }else{
            $pop.fadeIn();
            $winner.html(`Draw`)

            console.log("Draw")
        }
        
    }
})


// closing pop up and reset the game
closePopup.addEventListener("click", function(){
    reset()  
});


// reset the game
btnReset.addEventListener("click", function(){
    reset()
})

function reset(){
    round = 0
    uTotal = 0
    oTotal = 0
    yourTotalScore = []
    opponentTotalScore = []
    yourscore.innerHTML = ""
    opponentscore.innerHTML = ""
    yourtotal.innerHTML = ""
    opponenttotal.innerHTML = ""
    $btn.prop('disabled', false);
    body.style.opacity = 1
    $pop.css('display','none');
    imag1.setAttribute("src", "images/dice6.png");
    imag2.setAttribute("src", "images/dice6.png");
    imag3.setAttribute("src", "images/dice6.png");
    imag4.setAttribute("src", "images/dice6.png");
}



