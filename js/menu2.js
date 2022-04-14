var menuToggle = document.querySelector('.menuToggle');
var menu = document.querySelector('.menu')

function toggleMenu(){
  menu.classList.toggle('open')
}

menuToggle.addEventListener('click', toggleMenu);