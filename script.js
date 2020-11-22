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
const SecretNumber = Math.trunc(Math.random()*20) + 1; //trunc supp apres la virgule
console.log("🚀 ~ file: script.js ~ line 14 ~ SecretNumber", SecretNumber)

document.querySelector('.number').textContent = SecretNumber


document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value * 1;
    console.log(typeof guess)

    if(!guess) {
        document.querySelector('.message').textContent = ' No number Please try a number';
    }


})

