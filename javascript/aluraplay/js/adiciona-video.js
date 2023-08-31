import { conectaApi } from "./conecta-api.js";
const form = document.querySelector('[data-formulario]');

async function formAdicionaVideo(event) {
  event.preventDefault();
  const imagem = document.querySelector('[data-imagem]').value,
        url = document.querySelector('[data-url').value,
        titulo = document.querySelector('[data-titulo').value,
        descricao = Math.floor(Math.random() * 10).toString();
  try {
    await conectaApi.adicionaVideo(titulo, descricao, url, imagem);
    window.location.href = '../pages/envio-concluido.html';
  } catch {
    alert('Não foi possível enviar o vídeo.');
  }
}

form.addEventListener('submit', event => formAdicionaVideo(event));