

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const start = document.getElementById('start');
const slideshow_container = document.getElementById('slideshow_container')
//opens modal initially & displays welcome//
open.addEventListener('click', () => {
  modal_container.classList.add('show');
});
//this should take you to the next screen with slider//
// start.addEventListener('click', () => {
//   slideshow_container.classList.add('show');
// });

//display the slider and display none the initial screen just one time.//
function toggleSlider(){
  //get the slider
  var mySlider = document.getElementById('lastSeen');

  //get the current value of the slider's display property
  var displaySetting = mySlider.style.display;

  //get the slider button & change what it says
  var sliderButton = document.getElementById('start');

  //toggle the clider & button text, depending on current state
  if (displaySetting == 'block') {
    //slider is visible. hide it
    mySlider.style.display = 'none';
    //change button text
    sliderButton.innerHTML = 'Get Started';
  }
  else{
    //slider is hidden. show it
    mySlider.style.display = 'block';
    //change button text
    sliderButton.innerHTML = 'Hide slider';
  }
}