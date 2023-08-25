function exibeLivros(listaDeLivros) {
  sectionLivros.innerHTML = '';

  listaDeLivros.forEach(livro => {
    const disponibilidade = livro.quantidade > 0 ? 'livros__imagens' : 'livros__imagens indisponivel';

    sectionLivros.innerHTML += `
    <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
  });
}