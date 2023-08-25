const btnOrdenar = document.querySelector('#btnOrdenarPorPreco');
btnOrdenar.addEventListener('click', ordenaPorPreco);

function ordenaPorPreco() {
  const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibeLivros(livrosOrdenados);
}