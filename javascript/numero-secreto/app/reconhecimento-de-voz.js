const elementoChute = document.querySelector('#chute')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
  const chute = event.results[0][0].transcript;
  exibeChuteNaTela(chute);
  verificaChute(chute);
}

function exibeChuteNaTela(chute) {
  if (chute === "game over") {
    let chute = "GAME OVER"
    elementoChute.innerHTML = `
      <div>Você disse:</div>
      <span class="box">${chute}</span>
    `
  } else if (+chute) {
    elementoChute.innerHTML = `
      <div>Você disse:</div>
      <span class="box">${chute}</span>
    `
  }

}

recognition.addEventListener('end', () => recognition.start());