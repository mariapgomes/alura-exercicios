import { conectaApi } from "./conecta-api.js";
import constroiCard from "./mostra-videos.js";

async function buscaVideo(event) {
  event.preventDefault();
  const termoDaPesquisa = document.querySelector('[data-pesquisa]').value
  const busca = await conectaApi.buscaVideo(termoDaPesquisa);
  const lista = document.querySelector('[data-lista]');

  lista.innerHTML = '';
  busca.forEach(video => constroiCard(video));
}

const btnPesquisar = document.querySelector('[data-botao-pesquisar]');

btnPesquisar.addEventListener('click', event => buscaVideo(event));