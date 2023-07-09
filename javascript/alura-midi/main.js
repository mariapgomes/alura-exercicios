// *Da play no som ao clicar nos botoẽs

function reproduzSom () {
  
  function tocaSom(idAudio) {
    const audio = document.querySelector(idAudio);
  
    if (audio && audio.localName === 'audio') {
      audio.play();
    } else {
      console.log('Elemento não encontrado ou seletor inválido');
    }
  }
  
  const teclas = document.querySelectorAll('.tecla');
  
  teclas.forEach((tecla) => {
    const som = tecla.classList[1];
    const idAudio = `#som_${som}`;
    
    tecla.addEventListener('keydown', (event) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        tecla.classList.add('ativa');
      }
    });
    
    tecla.addEventListener('keyup', () => tecla.classList.remove('ativa'));
  
    tecla.addEventListener('click', () => {
      tocaSom(idAudio);
    });
  });
}

reproduzSom ()
