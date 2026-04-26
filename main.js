const filtros = document.querySelectorAll('.filtro-item');
const pokemons = document.querySelectorAll('.pokemon');
const fichaModal = document.querySelector('#ficha-modal');
const fecharFicha = document.querySelector('.ficha-fechar');

filtros.forEach(botao => {
    botao.addEventListener('click', () => {
        const tipoSelecionado = botao.getAttribute('tipo');

        pokemons.forEach(card => {
            card.classList.remove('disable');
            const tipoPokemon = card.getAttribute('tipo');
            if (tipoSelecionado === 'todos' || tipoPokemon.includes(tipoSelecionado)) {
                card.classList.remove('disable');
            } else {
                card.classList.add('disable');
            }
        });
    }); 
});

pokemons.forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('#ficha-titulo').textContent = card.getAttribute('nome');
        document.querySelector('#ficha-altura').textContent = card.getAttribute('altura');
        document.querySelector('#ficha-peso').textContent = card.getAttribute('peso');
        document.querySelector('#ficha-categoria').textContent = card.getAttribute('categoria');
        document.querySelector('#ficha-habilidades').textContent = card.getAttribute('habilidades');
        document.querySelector('#ficha-tipo').src = card.getAttribute('tipo_img');
        document.querySelector('#ficha-fraqueza').src = card.getAttribute('fraqueza');

        const evolu2 = document.querySelector('#evolu2');
        const evolu3 = document.querySelector('#evolu3');
        const setas = document.querySelectorAll('.ficha-seta');

        document.querySelector('#evolu1').src = card.getAttribute('evolu1');

        if (card.getAttribute('evolu2')) {
            evolu2.src = card.getAttribute('evolu2');
            evolu2.classList.remove('ficha--hidden');
            setas[0].classList.remove('ficha--hidden');
        } else {
            evolu2.classList.add('ficha--hidden');
            setas[0].classList.add('ficha--hidden');
        }

        if (card.getAttribute('evolu3')) {
            evolu3.src = card.getAttribute('evolu3');
            evolu3.classList.remove('ficha--hidden');
            setas[1].classList.remove('ficha--hidden');
        } else {
            evolu3.classList.add('ficha--hidden');
            setas[1].classList.add('ficha--hidden');
        }

        fichaModal.classList.remove('ficha--hidden');
    });
});

fecharFicha.addEventListener('click', () => {
    fichaModal.classList.add('ficha--hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    const nomeInput = document.querySelector('#nome-card');
    const vidaInput = document.querySelector('#vida-card');
    const pokemonSelect = document.querySelector('#select-pokemon-card');
    const ataqueInput = document.querySelector('#ataque-card');
    const categoriaSelect = document.querySelector('#select-categoria-card');
    const resistenciaInput = document.querySelector('#resistencia-card');
    
    const btn = document.querySelector('#btn-enviar-card');

    const displayNome = document.querySelector('#display-nome-card');
    const displayVida = document.querySelector('#display-vida-card');
    const displayAtaque = document.querySelector('#display-ataque-card');
    const displayResistencia = document.querySelector('#display-resistencia-card');
    const displayCategoria = document.querySelector('#display-categoria-card');
    const displayImg = document.querySelector('#display-img-pokemon-card');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        displayNome.innerHTML = nomeInput.value;
        displayVida.innerHTML = vidaInput.value ? `Vida: ${vidaInput.value}` : '';
        displayAtaque.innerHTML = ataqueInput.value ? `Ataque: ${ataqueInput.value}` : '';
        displayResistencia.innerHTML = resistenciaInput.value ? `Resistência: ${resistenciaInput.value}` : '';
        displayCategoria.innerHTML = categoriaSelect.value ? `Categoria: ${categoriaSelect.value}` : '';
        
        displayImg.src = `./assets/images/pokemons/${pokemonSelect.value}.png`;
        displayImg.style.display = 'block';
    });
});