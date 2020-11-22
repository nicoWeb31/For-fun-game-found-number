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
const secretNumber = Math.trunc(Math.random() * 20) + 1; //trunc supp apres la virgule
console.log('🚀 ~ file: script.js ~ line 14 ~ secretNumber', secretNumber);

document.querySelector('.number').textContent = secretNumber;

//score
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value * 1;
    console.log(typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent =
            ' No number Please try a number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent =
            'Correct number 🙂 BRAVO !!!';
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'To low ! ';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
        }
    } else if (guess > secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = 'To hight ! ';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            
            document.querySelector('.message').textContent = 'Game over !';
            document.querySelector('.score').textContent = 0;
        }


    }

    // document.querySelector('.score').textContent --;
    // if(document.querySelector('.score').textContent < 0 ){
    //     document.querySelector('.message').textContent = 'Game over !';
    //     document.querySelector('.score').textContent = 0
    // }
});
