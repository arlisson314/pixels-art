const allColors = document.getElementsByClassName('color');
const pixelElemento = document.getElementsByClassName('pixel');
const btnClearBoard = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const btnForm = document.getElementById('generate-board');
const btnRefreshColors = document.getElementById('refresh')
const pixelContainer = document.getElementById('pixel-board');
const corSeletor = document.querySelector('.selected');
const colorPalet = document.getElementsByClassName('color')

let corSelecionada = corSeletor.style.backgroundColor;

function geradorDeCores() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  
  return `rgb(${r}, ${g}, ${b})`;
}

function seletorDeCores({target}) {
  corSeletor.classList.remove('selected');
  target.classList.add('selected');

  return corSelecionada = target.style.backgroundColor;
};

for (let index = 0; index < allColors.length; index += 1) {
  allColors[index].addEventListener('click', seletorDeCores);
};

function paintPixel({target}) {
  return target.style.backgroundColor = corSelecionada;
};


function alterarCores() {
  for (let index = 0; index < pixelElemento.length; index += 1) {
    pixelElemento[index].addEventListener('click', paintPixel);
  };
};

function limpar() {
  for (let index = 0; index < pixelElemento.length; index += 1) {
    pixelElemento[index].style.backgroundColor = 'white';
  };
  return;
};
btnClearBoard.addEventListener('click', limpar);

const generatPixel = () => {
  const larguraContainer = Number(pixelContainer.style.width.slice(0,3))/Number(input.value);
  const alturaContainer = Number(pixelContainer.style.height.slice(0,3))/Number(input.value);

  const div = document.createElement('div');

  div.classList.add('pixel');
  div.setAttribute('style', `width: ${larguraContainer}px; height: ${alturaContainer}px;` );
  return div;
}

function inputForm(e) {
  e.preventDefault();
  const documentFragment = document.createDocumentFragment();

  input.value > 0 ? pixelContainer.innerHTML = '' : pixelContainer;
  input.value > 10 ? input.value = 10 : input.value;

  if (input.value !== '' && input.value > 0) {
    for (let i = 1; i <= input.value ** 2; i += 1) {
      documentFragment.append(generatPixel());
    }
  } else {
    alert('Board inválido!');
  }
  pixelContainer.append(documentFragment);
  alterarCores();
  input.value = '';
}
btnForm.addEventListener('click', inputForm);

function mudarCores() {
  return Array.from(colorPalet).map(({style}) => style.backgroundColor = geradorDeCores());
};
btnRefreshColors.addEventListener('click', mudarCores);

window.onload = () => alterarCores();