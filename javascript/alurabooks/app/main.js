let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

const sectionLivros = document.querySelector('#livros');

async function getBuscarLivrosDaAPI() {
  const resposta = await fetch(endpointDaAPI);
  livros = await resposta.json();
  const livrosComDesconto = aplicaDesconto(livros)
  exibeLivros(livrosComDesconto);
};