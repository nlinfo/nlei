/*Para controlar o botão do menu*/
var menuToggle = document.querySelector('.menuToggle');
var menu = document.querySelector('.menu')

function toggleMenu(){
  menu.classList.toggle('open')
}

menuToggle.addEventListener('click', toggleMenu);

<<<<<<< HEAD:js/script.js
/*Para fixar o menu*/

function fixarMenu(){
  var header = document.querySelector("nav");
  header.classList.toggle("stick", window.scrollY>0);
}

window.addEventListener("scroll", fixarMenu);

=======
>>>>>>> edivaldo:js/index.js
//links
var abrir_fecharLinksRapidos = document.getElementById("ellips_xmark")

abrir_fecharLinksRapidos.addEventListener("click", abrir_fecharLinks);


//função para abrir e fechar a div dos links
function abrir_fecharLinks() {

    var icone_id = document.querySelector('#abrir_fecharLinks')
    var divComLinks = document.querySelector("#divComLinks")

    icone_id.style.background = "#3B3B3B";
    icone_id.classList.toggle("fa-xmark");

    if (divComLinks.style.display == "none") {

        divComLinks.style.display = "flex"
        icone_id.style.background = "#de5151";
    } else {
        divComLinks.style.display = "none"
    }

}

