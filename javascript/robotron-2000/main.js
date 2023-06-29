const controleAjuste = document.querySelectorAll('.controle-ajuste');

function manipulaDados (event, peca) {
  const controleClicado = event.currentTarget;
  const contador = peca.querySelector('[data-contador]');

  if (controleClicado.getAttribute('data-controle') === '+') {
    contador.value++;
  } else {
    contador.value--;
  }
}

controleAjuste.forEach((controle) => {
  controle.addEventListener('click', (event) => {
    const peca = event.target.parentNode;
    manipulaDados(event, peca)
  })
});
