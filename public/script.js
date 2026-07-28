const barrasPesquisa = document.querySelectorAll(".barraPesquisa"); //recolhe todas as classes "barraPesquisa"
const botoesPesquisar = document.querySelectorAll(".botaoPesquisar"); //recolhe todas as classes "botaoPesquisar"
const resultadosPesquisa = document.querySelectorAll(".resultadoPesquisa"); //recolhe todas as classes "resultadoPesquisa"

//AKUMAS
botoesPesquisar[0].addEventListener("click", pesquisarAkuma);  //o primeiro elemento com class = "botaoPesquisar", no caso, o botão dos akumas

async function pesquisarAkuma(){

    const texto = barrasPesquisa[0].value.trim().toLowerCase();
    const resposta = await fetch(`/api/akumas/${texto}`);
    const dados = await resposta.json();
    if (dados.length === 0) {
        resultadosPesquisa[0].innerHTML = "<p>Akuma não encontrada.</p>";
        return;
    }

    const fruta = dados[0];
    resultadosPesquisa[0].innerHTML = `
        <div class="akumaResultado">
            <div class="infoAkuma">
                <h3>${fruta.nome}</h3>
                <p><strong>Tipo:</strong> ${fruta.tipo}</p>
                <p><strong>Utilizador:</strong> ${fruta.utilizador}</p>
                <p>${fruta.descricao}</p>
            </div>

            <div class="imgs">
                <img src="imagens/${fruta.imagem}" alt="${fruta.nome}">
            </div>
        </div>
    `;
    
}

//PERSONAGENS
botoesPesquisar[1].addEventListener("click", pesquisarPersonagem); //o segundo elemento com class = "botaoPesquisar", no caso, o botão dos personagens

async function pesquisarPersonagem(){

    const texto = barrasPesquisa[1].value.trim().toLowerCase();
    const resposta = await fetch(`/api/personagens/${texto}`);
    const dados = await resposta.json();
    if (dados.length === 0){
        resultadosPesquisa[1].innerHTML = "<p>Personagem não encontrada.</p>";
        return;
    }

    const personagem = dados[0];
    resultadosPesquisa[1].innerHTML = `
        <div class="personagemResultado">
            <div class="infoPersonagem">
                <h3>${personagem.nome}</h3>
                <p><strong>Estado:</strong> ${personagem.estado}</p>
                <p><strong>Tripulação:</strong> ${personagem.tripulacao}</p>
                <p><strong>Recompensa:</strong> ${Number(personagem.recompensa).toLocaleString()} Berries</p>
                <p>${personagem.descricao}</p>
            </div>

            <div class="imgs">
                <img src="imagens/${personagem.imagem}" alt="${personagem.nome}">
            </div>
        </div>
    `;

    
}

//TRIPULACOES
botoesPesquisar[2].addEventListener("click", pesquisarTripulacao);

async function pesquisarTripulacao(){

    const texto = barrasPesquisa[2].value.trim().toLowerCase();
    const resposta = await fetch(`/api/tripulacoes/${texto}`);
    const dados = await resposta.json();

    if(dados.length === 0){
        resultadosPesquisa[2].innerHTML = "<p>Tripulação não encontrada.</p>";
        return;
    }

    const tripulacao = dados[0];

    resultadosPesquisa[2].innerHTML = `
        <div class="tripulacaoResultado">
            <div class="infoTripulacao">
                <h3>${tripulacao.nome}</h3>
                <p><strong>Capitão:</strong> ${tripulacao.capitao}</p>
                <p><strong>Navio:</strong> ${tripulacao.navio}</p>
                <p><strong>Mar:</strong> ${tripulacao.mar}</p>
                <p><strong>Recompensa Total:</strong> ${Number(tripulacao.recompensa_total).toLocaleString()} Berries</p>
                <p><strong>Quantidade de Membros:</strong> ${tripulacao.quantidade_membros}</p>
                <p><strong>Estado:</strong> ${tripulacao.estado}</p>
                <p><strong>Descrição:</strong> ${tripulacao.descricao}</p>
            </div>

            <div class="imgs">
                <img src="imagens/${tripulacao.imagem}" alt="${tripulacao.nome}">
            </div>
        </div>
    `;
}