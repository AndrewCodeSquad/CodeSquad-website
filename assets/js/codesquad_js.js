// GOAL IS TO CHANGE TEXT IN RED BAR BASED ON SCREEN SIZE
// For big screens, write "Energize your talent pipeline..."
// For mobile phones, write "and stable careers in low-income communities"
// while hiding the buttons and sub-head over the main banner image
// var redTxtHome = document.getElementById("redTxtHome").innerHTML;

// THE LINE BELOW CHANGES THE TEXT; STILL NEED TO ADD SCREEN-SIZE TEST
// document.getElementById("redTxtHome").innerHTML = "New text!";

$('.carousel').carousel({
  interval: 2000
});

let cardButtons = document.querySelectorAll('.button-more');

for (let i = 0; i < cardButtons.length; i++) {
  cardButtons[i].addEventListener('click', toggleCards);
};

function toggleCards(e) {
  let divToChange = e.target.parentElement.parentElement;
  divToChange.classList.toggle('is-flipped');
};

// w3schools Dropdown Button code:

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}