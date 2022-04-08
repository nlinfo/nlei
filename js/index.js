



//links
var abrir_fecharLinksRapidos = document.getElementById("ellips_xmark")

abrir_fecharLinksRapidos.addEventListener("click", abrir_fecharLinks);


//função para abrir e fechar a div dos links
function abrir_fecharLinks() {

    var icone_id = document.querySelector('#abrir_fecharLinks')
    var divComLinks = document.querySelector("#divComLinks")

    icone_id.style.color = "red";
    icone_id.classList.toggle("fa-xmark");

    if (divComLinks.style.display == "none") {

        divComLinks.style.display = "flex"
    } else {
        divComLinks.style.display = "none"
    }

}


