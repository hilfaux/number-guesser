let min = 1,
    max = 10,
    guessesLeft = 3,
    winningNum = getRandomNum(min, max)



const UIgame = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

 UIgame.addEventListener('mousedown', function(e){
     if(e.target.className === 'play-again'){
         window.location.reload();
     }
 });

guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);
   if(isNaN(guess) || guess < min || guess > max){
       alert(`Please enter a value between ${min} and ${max}`, 'red');
   }
   if(guess === winningNum){
      GameOver(true, `${winningNum} is correct, you win!`);
   }else{
        guessesLeft -= 1;
        if(guessesLeft===0){
           GameOver(false, `Game over, the correct answer was ${winningNum}`);
        }else{
            setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left`,'red');
            guessInput.value='';
        }
   }
});

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

//Game over function 

function GameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg);
    message.style.color=color;
    //play again
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}