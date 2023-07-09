const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];//JSON.parse() converte um array que foi convertido em uma string anteriormente de volta em um array.

function criaElemento(item) {
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.dataset.id = item.id;
  numeroItem.innerHTML = item.quantidade;

  
  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;

  novoItem.appendChild(bntDeletar(item.id))
  lista.appendChild(novoItem);
}

itens.forEach((elemento) => {
  criaElemento(elemento);
});

function atualizaElemento(item) {
  const idDoItem = document.querySelector('[data-id="'+item.id+'"]');
  idDoItem.innerText = item.quantidade;
}

function bntDeletar(id) {
  const btn = document.createElement('button');
  btn.innerText = 'X';
  
  btn.addEventListener('click', function() {
    detelaItem(this.parentNode, id);
  });

  return btn;
}

function detelaItem(item, id) {
  item.remove();

  itens.splice(itens.findIndex((elemento) => elemento.id === id), 1)

  localStorage.setItem('itens', JSON.stringify(itens));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = event.target.elements['nome'];
  const quantidade = event.target.elements['quantidade'];
  const existe = itens.find((elemento) => elemento.nome === nome.value);
  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value
  };
  
  if(existe) {
    itemAtual.id = existe.id;
    atualizaElemento(itemAtual);
    itens[itens.findIndex((elemento) => elemento.id === existe.id)]= itemAtual;
  } else {
    itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0;
    criaElemento(itemAtual);
    itens.push(itemAtual);
  }

  localStorage.setItem('itens', JSON.stringify(itens));

  nome.value = '';
  quantidade.value = '';
});