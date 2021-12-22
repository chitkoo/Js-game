'use strict';

let ramdom = document.querySelector('.ramdomBox');
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let body = document.querySelector('body');
let guessValue = document.querySelector('.guessInput');

let ramdomValue = Math.trunc(Math.random()*20) +1;
// console.log(ramdomValue);
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.guessText').textContent = message;
};

checkBtn.addEventListener('click', function(){
    const guess = Number(guessValue.value);
    console.log(guess, typeof guess);
    //wrong input
    if(guess == 0 ){
        console.log('this work');
        displayMessage('Wrong Input ⛔');
      //guess > 20  
    } else if(guess > 20){
        displayMessage('Guess number should be between 1 to 20⛔');
      //correct guess 
    } else if(guess === ramdomValue){
        displayMessage('Correct Guess 🎉');
        ramdom.textContent = ramdomValue;
        ramdom.style.width = '30rem';
        body.style.backgroundColor = '#3d5af1';

        //highscore value
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
      //incorrect guess
    } else if(guess !== ramdomValue){  
        //incorrect = minus score
        if(score > 1){
            displayMessage(guess > ramdomValue ? 'Value is too high!📈': 'Value is too low!📉');
            score--;
            document.querySelector('.score').textContent = score;
          //when score 0  
        } else{
            displayMessage('You lose the game!💥');
            document.querySelector('.score').textContent = 0;
        }
    }   
});

againBtn.addEventListener('click',function(){
    score = 20;
    highscore = 0;
    ramdomValue = Math.trunc(Math.random()*20) +1;
    // console.log(ramdomValue);
    //for incorrect
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;

    guessValue.value = "";

    //for correct
    ramdom.textContent = '?';
    ramdom.style.width = '15rem';
    body.style.backgroundColor = "var(--bg-color)";
    
});





