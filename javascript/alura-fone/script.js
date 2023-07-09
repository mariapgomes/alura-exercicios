function discaNumero () {
  const tela = document.querySelector('[type="tel"]');
  const teclado = document.querySelectorAll('[type="button"]');
  
  function discador (event) {
    const teclaClicada = event.currentTarget;
    const valorTecla = teclaClicada.getAttribute('value');
    const valorAtualTela = tela.getAttribute('value');
    tela.setAttribute('value', valorAtualTela + valorTecla);
  }
  
  teclado.forEach((tecla) => {
    
    tecla.addEventListener('keydown', (event) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        tecla.classList.add('ativa');
      }
    });
    
    tecla.addEventListener('keyup', () => tecla.classList.remove('ativa'));
  
    tecla.addEventListener('click', discador);
  });
}

discaNumero();