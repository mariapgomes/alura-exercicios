$('#botao-frase').click(fraseAleatoria);
$('#botao-frase-id').click(buscaFrase);
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
      tempoFrase = dados[numeroAleatorio].tempo;
  
  $frase.text(dados[numeroAleatorio].texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial(tempoFrase);
}

function buscaFrase() {
  $('#spinner').show();
  const $fraseId = $('#frase-id').val(),
        $buscaFraseId = {id: $fraseId};

  $.get('http://localhost:3000/frases', $buscaFraseId, exibeFrase)
  .fail(function() {
    $('#erro').show();
    setTimeout(function() {
      $('#erro').hide();
    },3000);
  })
  .always(function() {
    $('#spinner').hide();
  });
}

function exibeFrase(dados) {
  let tempoFrase = dados.tempo;
  $frase.text(dados.texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial(tempoFrase);
}