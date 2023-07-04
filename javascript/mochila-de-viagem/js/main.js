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

  novoItem.appendChild(bntDeletar())
  lista.appendChild(novoItem);
}

itens.forEach((elemento) => {
  criaElemento(elemento);
});

function atualizaElemento(item) {
  const idDoItem = document.querySelector('[data-id="'+item.id+'"]');
  idDoItem.innerText = item.quantidade;

}

function bntDeletar() {
  const btn = document.createElement('button');
  btn.innerText = 'X';
  
  btn.addEventListener('click', function() { //Foi necessário declarar a função dessa forma porque com a () => não funciona o this.
    detelaItem(this.parentNode);
  });

  return btn;
}

function detelaItem(item) {
  item.remove();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = event.target.elements['nome'];
  const quantidade = event.target.elements['quantidade'];
  const existe = itens.find((elemento) => elemento.nome === nome.value);//array.find(parâmetro), verifica se a condição dentro dele existe no array definido.
  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value
  };
  
  if(existe) {
    itemAtual.id = existe.id;
    atualizaElemento(itemAtual);
  } else {
    itemAtual.id = itens.length
    criaElemento(itemAtual);
    itens.push(itemAtual);
  }

  localStorage.setItem('itens', JSON.stringify(itens)); //JSON.stringify(itens) transforma um objeto em uma string.

  nome.value = '';
  quantidade.value = '';
});