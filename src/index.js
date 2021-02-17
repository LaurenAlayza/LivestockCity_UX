import "./styles.css";

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


//toggle the modal content from welcome to carousel
// function toggleModal() {
//   var modal_container = document.getElementById("modal_container");
//   if (modal_container).style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }