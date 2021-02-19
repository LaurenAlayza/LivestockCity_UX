

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const start = document.getElementById('start');
const slideshow_container = document.getElementById('slideshow_container')

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

start.addEventListener('click', () => {
  slideshow_container.classList.add('show');
});
