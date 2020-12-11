// GOAL IS TO CHANGE TEXT IN RED BAR BASED ON SCREEN SIZE
// For big screens, write "Energize your talent pipeline..."
// For mobile phones, write "and stable careers in low-income communities"
// while hiding the buttons and sub-head over the main banner image
// var redTxtHome = document.getElementById("redTxtHome").innerHTML;

// THE LINE BELOW CHANGES THE TEXT; STILL NEED TO ADD SCREEN-SIZE TEST
// document.getElementById("redTxtHome").innerHTML = "New text!";

$('.carousel').carousel({
  interval: 2000
})

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

