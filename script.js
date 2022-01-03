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
