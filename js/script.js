window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("stick", window.scrollY>0);
})