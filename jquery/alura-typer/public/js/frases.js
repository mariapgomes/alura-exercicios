$('#botao-frase').click(fraseAleatoria);
let $frase = $('.frase');

function fraseAleatoria() {
  $('#spinner').show();

  $.get('http://localhost:3000/frases', trocaFrase)
  .fail(function() {
    $('#erro').show();
    setTimeout(function() {
      $('#erro').hide();
    },3000);
  }).always(function() {
    $('#spinner').hide();
  });
}

function trocaFrase(dados) {
  let numeroAleatorio = Math.floor(Math.random() * dados.length),
      $tempoFrase = dados[numeroAleatorio].tempo;
  
  $frase.text(dados[numeroAleatorio].texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial($tempoFrase);
}