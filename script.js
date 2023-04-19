


$(document).ready(function() {
  $('.hero').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });

  $('.hero').on('click touchstart', function(event) {
    var x = event.pageX || event.originalEvent.touches[0].pageX;
    var y = event.pageY || event.originalEvent.touches[0].pageY;
    $('.hero').ripples('drop', x, y, 20, 0.05);
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
    menu.classList.toggle('active');
    hamburger.classList.remove('active')
    
  });
}

// for displaying live date(year)

const current = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = current;

