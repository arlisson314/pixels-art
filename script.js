let corSeletor = document.querySelector('.selected');
let corSelecionada = corSeletor.style.backgroundColor;
const corElemento = document.querySelectorAll('.color');

function seletorDeCores(event) {
  const corAntigaSeletor = corSeletor;
  corAntigaSeletor.classList.remove('selected');

  const corNovoSeletor = event.target;
  corNovoSeletor.classList.add('selected');

  corSeletor = corNovoSeletor;
  corSelecionada = corNovoSeletor.style.backgroundColor;
}

for (let index = 0; index < corElemento.length; index += 1) {
  corElemento[index].addEventListener('click', seletorDeCores);
}

const pixelElemento = document.querySelectorAll('.pixel');

function paintPixel(event) {
  const pixelElementoPaint = event.target;
  pixelElementoPaint.style.backgroundColor = corSelecionada;
}

for (let index = 0; index < pixelElemento.length; index += 1) {
  pixelElemento[index].addEventListener('click', paintPixel);
}
