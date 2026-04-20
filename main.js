const filtros = document.querySelectorAll('.filtro-item');
const pokemons = document.querySelectorAll('.pokemon');
const fichaModal = document.querySelector('#ficha-modal');
const fecharFicha = document.querySelector('.ficha-fechar');

filtros.forEach(botao => {
    botao.addEventListener('click', () => {
        const tipoSelecionado = botao.dataset.tipo;

        pokemons.forEach(card => {
            const tiposDoPokemon = card.dataset.tipo.split(' '); 

            if (tipoSelecionado === 'todos' || tiposDoPokemon.includes(tipoSelecionado)) {
                card.classList.remove('disable');
            } else {
                card.classList.add('disable');
            }
        });
    });
});

pokemons.forEach(card => {
    card.addEventListener('click', () => {
        // Preenche textos simples
        document.querySelector('#ficha-titulo').textContent = card.dataset.nome;
        document.querySelector('#ficha-altura').textContent = card.dataset.altura;
        document.querySelector('#ficha-peso').textContent = card.dataset.peso;
        document.querySelector('#ficha-categoria').textContent = card.dataset.categoria;
        document.querySelector('#ficha-habilidades').textContent = card.dataset.habilidades;
        document.querySelector('#ficha-tipo').src = card.dataset.tipo_img;
        document.querySelector('#ficha-fraqueza').src = card.dataset.fraqueza;

        document.querySelector('#evolu1').src = card.dataset.evolu1;
        document.querySelector('#evolu2').src = card.dataset.evolu2;
        document.querySelector('#evolu3').src = card.dataset.evolu3;

        fichaModal.classList.remove('ficha--hidden');
    });
});

fecharFicha.addEventListener('click', () => {
    fichaModal.classList.add('ficha--hidden');
});

// Fechar ao clicar no fundo escuro
fichaModal.addEventListener('click', (event) => {
    if (event.target === fichaModal) {
        fichaModal.classList.add('ficha--hidden');
    }
});