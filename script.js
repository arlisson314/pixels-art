const body = document.getElementsByTagName('body')[0];
body.style.background = 'linear-gradient(88.15deg, #2F2325 16.62%, #8E5D52 85.61%)';

let corSeletor = document.querySelector('.selected');
const allColors = document.getElementsByClassName('color');
const pixelElemento = document.getElementsByClassName('pixel');
const btnClearBoard = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const btnForm = document.getElementById('generate-board');
let corSelecionada = corSeletor.style.backgroundColor;

function inputForm(event) {
  event.preventDefault();
  const pixelContainer = document.getElementById('pixel-board');
  pixelContainer.innerHTML = '';
  if (input.value !== '') {
    for (let i = 1; i <= input.value ** 2; i += 1) {
      const div = document.createElement('div');
      div.classList.add('pixel');
      div.style.background = 'white';
      pixelContainer.appendChild(div);
    }
  } else {
    alert('Board inválido!');
  }
  input.value = '';
}
btnForm.addEventListener('click', inputForm);

function seletorDeCores(event) {
  const corAntigaSeletor = corSeletor;
  corAntigaSeletor.classList.remove('selected');

  const corNovoSeletor = event.target;
  corNovoSeletor.classList.add('selected');

  corSeletor = corNovoSeletor;
  corSelecionada = corSeletor.style.backgroundColor;
}

for (let index = 0; index < allColors.length; index += 1) {
  allColors[index].addEventListener('click', seletorDeCores);
}

function paintPixel(event) {
  const pixelElementoPaint = event.target;
  pixelElementoPaint.style.backgroundColor = corSelecionada;
}

for (let index = 0; index < pixelElemento.length; index += 1) {
  pixelElemento[index].addEventListener('click', paintPixel);
}

function limpar() {
  for (let index = 0; index < pixelElemento.length; index += 1) {
    pixelElemento[index].style.backgroundColor = 'white';
  }
}
btnClearBoard.addEventListener('click', limpar);
