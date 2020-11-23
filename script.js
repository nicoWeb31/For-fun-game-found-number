'use strict';
/*
document.querySelector('.message').textContent = 'Correct number 🙂 ';

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 20

document.querySelector('.guess').value = 34
console.log(document.querySelector('.guess').value);
*/

//secret number
//const SecretNumber = Math.round(Math.random()*20)

const randomNumber = ()=>{
    return Math.trunc(Math.random() * 20) + 1; //trunc supp apres la virgule
}

const displayMessage = (message)=>{
    document.querySelector('.message').textContent = message;
}


let secretNumber = randomNumber();
console.log('🚀 ~ file: script.js ~ line 14 ~ secretNumber', secretNumber);

//score
let score = 20;

//higscore scor
let hightscore = 0

document.querySelector('.check').addEventListener('click', function () {
    let guess = document.querySelector('.guess').value * 1;
    console.log(typeof guess);

    if (!guess) {
        displayMessage(' No number Please try a number')
        //player win css green
    } else if (guess === secretNumber) {
        displayMessage('Correct number 🙂 BRAVO !!!')
        
        const body = document.querySelector('body');
        body.style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        //value hightscore
        if (score > hightscore) {
            hightscore = score;
            document.querySelector('.highscore').textContent = hightscore;
        }


        
    }else if(guess !== secretNumber){
        
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too higth' : 'Too low';
            displayMessage(guess > secretNumber ? 'Too higth' : 'Too low')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Game over !');
            document.querySelector('.score').textContent = 0;
        }


    }

    //reset functionnalite
    //1 select the button reset plus event click

    document.querySelector('.again').addEventListener('click', function () {

        secretNumber = randomNumber()
        score = 20; 

        //restore intial value of number variable;
        //resotre value message
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;
        displayMessage('Start guessing...');
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

        
    });

});
