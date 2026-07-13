const barraDePesquisa = document.getElementById("barraPesquisa");
const botaoDePesquisar = document.getElementById("botaoPesquisar");
const resultadoDaPesquisa = document.getElementById("resultadoPesquisa");

botaoDePesquisar.addEventListener("click", mostrarPesquisa);

async function mostrarPesquisa() {

    const texto = barraDePesquisa.value;
    const resposta = await fetch(`/api/akumas/${texto}`);
    const dados = await resposta.json();
    if(dados.length === 0){
        resultadoDaPesquisa.innerHTML = "<p>Akuma não encontrada.</p>";
        return;
    }

    const fruta = dados[0];
    resultadoDaPesquisa.innerHTML = `
        <h3>${fruta.nome}</h3>
        <p><strong>Tipo:</strong> ${fruta.tipo}</p>
        <p><strong>Utilizador:</strong> ${fruta.utilizador}</p>
        <p>${fruta.descricao}</p>
        <img src="imagens/${fruta.imagem}" width="250">
    `;
}