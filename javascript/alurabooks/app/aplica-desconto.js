function aplicaDesconto(livros) {
  let desconto = 30;
  const descontoConvertido = desconto/100;
  const descontoAplicado = livros.map(livro => {
    return {...livro, preco: livro.preco - (livro.preco * descontoConvertido)};
  })

  return descontoAplicado;
}