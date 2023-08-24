const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => {
  btn.addEventListener('click', filtraLivros);
})

function filtraLivros(event) {
  const valueBtn = event.target.value
  const livrosFiltrados = livros.filter(livro => livro.categoria === valueBtn);
  exibeLivros(livrosFiltrados);
}