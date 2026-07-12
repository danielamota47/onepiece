const barraDePesquisa = document.getElementById("barraPesquisa");
const botaoDePesquisar = document.getElementById("botaoPesquisar");
const resultadoDaPesquisa = document.getElementById("resultadoPesquisa");

botaoDePesquisar.addEventListener("click", mostrarPesquisa);

function mostrarPesquisa() {
    const texto = document.getElementById("barraPesquisa").value;
    document.getElementById("resultadoPesquisa").textContent = texto;
}