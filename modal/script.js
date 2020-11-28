'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');
console.log("🚀 ~ file: script.js ~ line 8 ~ btnOpenModal", btnOpenModal)

for(let i = 0; i < btnOpenModal.length; i++) 
btnOpenModal[i].addEventListener('click', function(e){

    console.log(btnOpenModal[i].textContent, 'click')
    modal.classList.remove('hidden')

    btnCloseModal.addEventListener('click', function(e){
        modal.classList.add('hidden')
    })
})


