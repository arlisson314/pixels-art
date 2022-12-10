const body = document.getElementsByTagName('body')[0];
body.style.background = 'linear-gradient(88.15deg, #2F2325 16.62%, #8E5D52 85.61%)';

const allColors = document.getElementsByClassName('color');
const pixelElemento = document.getElementsByClassName('pixel');
const btnClearBoard = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const btnForm = document.getElementById('generate-board');
const btnRefreshColors = document.getElementById('refresh')

let corSeletor = document.querySelector('.selected');
let colorPalet = document.getElementsByClassName('color')
let corSelecionada = corSeletor.style.backgroundColor;

function geradorDeCores() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  
  return `rgb(${r}, ${g}, ${b})`;
}

function mudarCores() {
  return Array.from(colorPalet).map(({style}) => style.backgroundColor = geradorDeCores());
}
btnRefreshColors.addEventListener('click', mudarCores)

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

function inputForm(e) {
  e.preventDefault();
  const pixelContainer = document.getElementById('pixel-board');
  input.value > 0 ? pixelContainer.innerHTML = '' : pixelContainer;

  if (input.value !== '' && input.value > 0) {
    for (let i = 1; i <= input.value ** 2; i += 1) {
      const div = document.createElement('div');
      div.classList.add('pixel');
      pixelContainer.appendChild(div);
    }
  } else {
    alert('Board inválido!');
  }
  input.value = '';
}
btnForm.addEventListener('click', inputForm);
