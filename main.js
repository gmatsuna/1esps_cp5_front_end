const filtros = document.querySelectorAll('.filtro-item');
const pokemons = document.querySelectorAll('.pokemon');

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