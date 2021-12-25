'use strict';

const buttonShowModals = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const buttonCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const showModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let buttonShowModal of buttonShowModals) {
  buttonShowModal.addEventListener('click', showModel);
}

buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (!modal.classList.contains('hidden') && event.key === 'Escape')
    closeModal();
});
