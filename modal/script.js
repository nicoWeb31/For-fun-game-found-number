'use strict';

const hiddenModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');
console.log('🚀 ~ file: script.js ~ line 8 ~ btnOpenModal', btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
    console.log(btnOpenModal[i].textContent, 'click');
    btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', hiddenModal);
overlay.addEventListener('click', hiddenModal);

//close modale with echap key press
document.addEventListener('keydown', function (e) {
    console.log('a key was pressed ! ', e.key);
    if (e.key === 'Escape') {
        console.log('esc was pressed');
        if (!modal.classList.contains('hidden')) {
            hiddenModal();
        }

    }
});