let corSeletor = document.querySelector('.selected');
let corSelecionada = corSeletor.style.backgroundColor;
let corElemento = document.querySelectorAll('.color');

function seletorDeCores(event) {
    const corAntigaSeletor = corSeletor.classList.remove('selected');
    const corNovaSeletor = event.target.classList.add('selected');
    corSeletor = corNovaSeletor;
    corSelecionada = corNovaSeletor.style.backgroundColor;
};