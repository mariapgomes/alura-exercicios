$('#botao-frase').click(fraseAleatoria);
let $frase = $('.frase');

function fraseAleatoria() {
  $.get('http://localhost:3000/frases', trocaFrase);
}

function trocaFrase (data) {
  let numeroAleatorio = Math.floor(Math.random() * data.length),
      $tempoFrase = data[numeroAleatorio].tempo;
  
  $frase.text(data[numeroAleatorio].texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial($tempoFrase);
}