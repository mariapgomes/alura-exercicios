import { conectaApi } from "./conecta-api.js";
const form = document.querySelector('[data-formulario]');

async function formAdicionaVideo(event) {
  event.preventDefault();
  const imagem = document.querySelector('[data-imagem]').value,
        url = document.querySelector('[data-url').value,
        titulo = document.querySelector('[data-titulo').value,
        descricao = Math.floor(Math.random() * 10).toString();
  
  await conectaApi.adicionaVideo(titulo, descricao, url, imagem);
  window.location.href = '../pages/envio-concluido.html';
}

form.addEventListener('submit', event => formAdicionaVideo(event));