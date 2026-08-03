const barrasPesquisa = document.querySelectorAll(".barraPesquisa");
const botoesPesquisar = document.querySelectorAll(".botaoPesquisar");
const resultadosPesquisa = document.querySelectorAll(".resultadoPesquisa");

//AKUMAS

botoesPesquisar[0].addEventListener("click", pesquisarAkuma);

async function pesquisarAkuma(){
    const texto = barrasPesquisa[0].value.trim().toLowerCase();
    const resposta = await fetch(`/api/akumas/${texto}`);
    const dados = await resposta.json();
    if (dados.length === 0){
        resultadosPesquisa[0].innerHTML = "<p>Akuma not found.</p>";
        return;
    }

    const fruta = dados[0];
    resultadosPesquisa[0].innerHTML = `
        <div class="akumaResultado">
            <div class="infoAkuma">
                <h3>${fruta.name}</h3>
                <p><strong>Tipo:</strong> ${fruta.type}</p>
                <p><strong>Utilizador:</strong> ${fruta.user}</p>
                <p>${fruta.description}</p>
            </div>

            <div class="imgs">
                <img src="imagens/${fruta.image}" alt="${fruta.name}">
            </div>
        </div>
    `;
}

//PERSONAGENS

botoesPesquisar[1].addEventListener("click", pesquisarPersonagem);

async function pesquisarPersonagem(){
    const texto = barrasPesquisa[1].value.trim().toLowerCase();
    const resposta = await fetch(`/api/characters/${texto}`);
    const dados = await resposta.json();

    if (dados.length === 0){
        resultadosPesquisa[1].innerHTML = "<p>Character not found.</p>";
        return;
    }

    const personagem = dados[0];
    resultadosPesquisa[1].innerHTML = `
        <div class="personagemResultado">
            <div class="infoPersonagem">
                <h3>${personagem.name}</h3>
                <p><strong>Estado:</strong> ${personagem.status}</p>
                <p><strong>Tripulação:</strong> ${personagem.crew}</p>
                <p><strong>Recompensa:</strong> ${
                    personagem.bounty
                        ? Number(personagem.bounty).toLocaleString()
                        : "Unknown"
                } Berries</p>
                <p>${personagem.description}</p>
            </div>

            <div class="imgs">
                <img src="imagens/${personagem.image}" alt="${personagem.name}">
            </div>
        </div>
    `;
}

//TRIPULAÇÕES

botoesPesquisar[2].addEventListener("click", pesquisarTripulacao);

async function pesquisarTripulacao(){
    const texto = barrasPesquisa[2].value.trim().toLowerCase();
    const resposta = await fetch(`/api/crews/${texto}`);
    const dados = await resposta.json();

    if (dados.length === 0){
        resultadosPesquisa[2].innerHTML = "<p>Crew not found.</p>";
        return;
    }

    const tripulacao = dados[0];
    resultadosPesquisa[2].innerHTML = `
        <div class="tripulacaoResultado">
            <div class="infoTripulacao">
                <h3>${tripulacao.name}</h3>
                <p><strong>Capitão:</strong> ${tripulacao.captain}</p>
                <p><strong>Navio:</strong> ${tripulacao.ship}</p>
                <p><strong>Mar:</strong> ${tripulacao.sea}</p>
                <p><strong>Recompensa Total:</strong> ${Number(tripulacao.total_bounty).toLocaleString()} Berries</p>
                <p><strong>Quantidade de Membros:</strong> ${tripulacao.member_count}</p>
                <p><strong>Estado:</strong> ${tripulacao.status}</p>
                <p><strong>Descrição:</strong> ${tripulacao.description}</p>
            </div>

            <div class="imgs">
                <img src="imagens/${tripulacao.image}" alt="${tripulacao.name}">
            </div>
        </div>
    `;
}