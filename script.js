let corSeletor = document.querySelector('.selected');
let corSelecionada = corSeletor.style.backgroundcolor;
let corElemento = document.querySelector('.color');

function seletorDeCores(event) {
    const corAntigaSeletor = corSeletor;
    corAntigaSeletor.classList.remove('selected');

};