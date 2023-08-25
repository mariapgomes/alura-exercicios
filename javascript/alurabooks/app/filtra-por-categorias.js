const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => {
  btn.addEventListener('click', filtraLivros);
})

function filtraLivros(event) {
  const valueBtn = event.target.value
  const livrosFiltrados = valueBtn === 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria === valueBtn);
  exibeLivros(livrosFiltrados);
}