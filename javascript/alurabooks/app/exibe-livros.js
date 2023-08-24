const sectionLivros = document.querySelector('#livros');

async function getBuscarLivrosDaAPI() {
  const resposta = await fetch(endpointDaAPI); /*O await Diz para a função que ela precisa esperar por uma resposta*/
  livros = await resposta.json();
  console.table(livros);
  exibeLivros(livros);
};

function exibeLivros(listaDeLivros) {
  listaDeLivros.forEach(livro => {
    sectionLivros.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
  });
}