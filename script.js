'use strict';

/*
// show the content of a tag (ex message)
console.log(document.querySelector('.message').textContent);

// change content of tags html 
document.querySelector('.message').textContent= 'correct number 🤩';
//document.querySelector('.number').textContent= '✨';
document.querySelector('.score').textContent = ' 2 left'


// Puts a value in a tag 
document.querySelector('.guess').value = 999;
console.log(document.querySelector('.guess').value)

*/
let secretNumber= Math.trunc(Math.random()*20)+1;
let score =20;
let highscore =0;

// function that I used to not repeat this code
function displayMessage(message){
    document.querySelector('.message').textContent = message
};
// shows the number and the type
//console.log(secretNumber,typeof secretNumber) 

// Select a button and add an  eventListener 
//it works with a (click) that trigger the  function 
document.querySelector('.check').addEventListener('click',function(){
    
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        //Change a tag when it is not a number
       // document.querySelector('.message').textContent ='É NUMERO ? '
        displayMessage('É NUMERO ? ')
    }
    else if(secretNumber === guess){
        //change the html if the guess is correct
        //document.querySelector('.message').textContent = 'Acertou mizeravii !!!'
        displayMessage('Acertou mizeravii !!!')
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor ='#60b347'
       if(score>highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
       }
    }
    // this is the first form of the project  but ibelow is the refactored form 
  /*  else if(secretNumber > guess){
        score = score-1;
        //altera o html  caso o palpite seja menor que o numero correto
        displayMessage() ' ERRROOOUUU,Na proxima tente mais alto'
        document.querySelector('.score').textContent = score

        if(score == 0){
            document.querySelector('h1').textContent = 'Loser 😆'
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
    else if(secretNumber < guess){
        score = score-1;
       //altera o html  caso o palpite seja menor que o numero correto
        document.querySelector('.message').textContent = ' ERRROOOUUU,Na proxima tente mais baixo'
        document.querySelector('.score').textContent = score

        if(score == 0){
            document.querySelector('h1').textContent = 'Loser 😆'
            document.querySelector('body').style.backgroundColor = 'red'
    }
    }*/
    //refactored form /dry form
    else if(secretNumber !== guess){
        score = score-1;
        //document.querySelector('.message').textContent = guess > secretNumber ? 'ERRROOOUUU,Na proxima tente mais BAIXO' : ' ERRROOOUUU,Na proxima tente mais ALTO';
        displayMessage( guess > secretNumber ? 'ERRROOOUUU,Na proxima tente mais BAIXO' : ' ERRROOOUUU,Na proxima tente mais ALTO')
        document.querySelector('.score').textContent = score
        
        if(score == 0){
            document.querySelector('h1').textContent = 'Loser 😆'
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
}) 
 
// function reload page url when its triggered
document.querySelector('.again').addEventListener('click',function(){
   //location.reload()  //reload page url
   score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber,typeof secretNumber)
   document.querySelector('.number').textContent ='?'
  // document.querySelector('.message').textContent ='Start guessing !!'
    displayMessage('Start guessing !!')
   document.querySelector('h1').textContent = 'Guess My Number!'
   document.querySelector('.score').textContent = score;
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = '#222';
   

})




