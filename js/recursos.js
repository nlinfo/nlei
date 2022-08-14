
const abrir_filtro = document.querySelector("#abrir_filtro")

const fechar_filtro = document.querySelector("#fechar_filtro")
const filtroSection = document.querySelector("#filtro")

abrir_filtro.addEventListener("click", function abrir_f() {
    filtroSection.style.visibility="visible" ;
})
fechar_filtro.addEventListener("click", () => {
    filtroSection.style.visibility="hidden" ;
})

