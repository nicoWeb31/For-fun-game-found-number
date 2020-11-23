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



//score
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value * 1;
    console.log(typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent =
            ' No number Please try a number';
    //player win css green
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent =
            'Correct number 🙂 BRAVO !!!';
        const body = document.querySelector('body');
        body.style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

    //to low        
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'To low ! ';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
        }
    //to hight    
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


    //reset functionnalite
    //1 select the button reset plus event click

    document.querySelector('.again').addEventListener('click', function () {
        //restore initial value hightscore
        let hightscore = document.querySelector('.highscore').textContent;
        console.log("🚀 ~ file: script.js ~ line 68 ~ hightscore", hightscore)
        if(score > hightscore){
            return document.querySelector('.highscore').textContent = score;
        }


        //restore intial value of number variable;
        document.querySelector('.score').textContent = 20;
        document.querySelector('.number').textContent = Math.trunc(Math.random() * 20) + 1;

        //resotre value message
        document.querySelector('.message').textContent = 'Start guessing...';

        document.querySelector('body').style.backgroundColor="#222";
        document.querySelector('.number').style.width='15rem'

    })



    // document.querySelector('.score').textContent --;
    // if(document.querySelector('.score').textContent < 0 ){
    //     document.querySelector('.message').textContent = 'Game over !';
    //     document.querySelector('.score').textContent = 0
    // }
});
