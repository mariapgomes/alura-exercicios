const menorValor = 100;
const maiorValor = 500;

const numeroSecreto = geradorNumeroAleatorio();

function geradorNumeroAleatorio() {
  return Math.floor(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);

const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerText = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerText = maiorValor;
