const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => {
  btn.addEventListener('click', filtraLivros);
})

function filtraLivros(event) {
  const valueBtn = event.target.value,
        disponivel = valueBtn === 'disponivel',
        livrosDisponiveis = livros.filter(livro => livro.quantidade > 0),
        filtroCategorias = livros.filter(livro => livro.categoria === valueBtn),
        livrosFiltrados = disponivel ? livrosDisponiveis : filtroCategorias;

  exibeLivros(livrosFiltrados);

  if(disponivel) {
    exibeValorTotal()
  }
}

function exibeValorTotal() {
  valorTotal.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
  </div>
  `
}