

$(document).ready(function() {
  $('.hero').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });

  $('.hero').mouseenter(function(event) {
    $('.hero').ripples('drop', event.clientX, event.clientY, 20, 0.05);
  });
});

// for hamburger menu

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

var navLinks = document.querySelectorAll("nav a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    menuToggle.classList.toggle('active');
  });
}

// for displaying live date(year)
const current = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = current;