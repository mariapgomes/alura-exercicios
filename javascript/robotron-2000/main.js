const controleAjuste = document.querySelectorAll('.controle-ajuste');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5
  },
  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -4
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 43
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: -32,
    velocidade: -2
  }
};

function manipulaDados (event, peca) {
  const controleClicado = event.currentTarget;
  const contador = peca.querySelector('[data-contador]');

  if (controleClicado.getAttribute('data-controle') === '+') {
    contador.value++;
  } else {
    contador.value--;
  }
};

function atualizaEstatisticas (peca) {
  estatisticas.forEach((estatistica) => {
    const caracteristica = estatistica.getAttribute('data-estatistica');
    estatistica.innerText = ++estatistica.innerText + pecas[peca][caracteristica];
  })
};

controleAjuste.forEach((controle) => {
  controle.addEventListener('click', (event) => {
    const peca = event.target.parentNode;
    const estatisticaPeca = event.target.getAttribute('data-pecas');

    manipulaDados(event, peca);
    atualizaEstatisticas(estatisticaPeca);
  })
});
