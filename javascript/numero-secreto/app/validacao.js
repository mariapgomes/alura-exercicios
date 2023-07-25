function verificaChute(chute) {
  const numero = +chute;

  if(chuteInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor Inválido</div>';
    return //Esse return impede que a função continue a ser retornada
  }

  if (chuteForaPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>

      <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</buttom>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function chuteForaPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (event) => {
  if (event.target.id === 'jogar-novamente') {
    window.location.reload()
  }
})