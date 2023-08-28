import listaVideos from "./conecta-api.js";

const lista = document.querySelector('[data-lista]');

function constroiCard(video) {
  lista.innerHTML += `
  <li class="videos__item">
    <iframe width="100%" height="72%" src="${video.url}"
      title="${video.titulo}" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <div class="descricao-video">
      <img src="${video.imagem}" alt="logo canal alura">
      <h3>${video.titulo}</h3>
      <p>${video.descricao}</p>
    </div>
  </li>
  `
  return lista;
}

async function listaVideo() {
  const listaApi = await listaVideos();
  listaApi.forEach(video => {
    constroiCard(video)
  });
}

listaVideo();