const teclas = document.querySelectorAll('.tecla');

function btnReproduzir (event) {
  const teclaClicada = event.currentTarget;
  const nomeDaTecla = teclaClicada.innerText.toLowerCase();
  const audio = document.querySelectorAll('audio');
  audio.forEach((audio) => {
    if (audio.classList.contains(nomeDaTecla)) {
      audio.play()
    }
  });
}

teclas.forEach((tecla) => {
  tecla.addEventListener('click', btnReproduzir);
})