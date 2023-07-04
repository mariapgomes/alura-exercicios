const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');

function criaElemento(nome, quantidade) {
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = quantidade;
  
  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = event.target.elements['nome'].value;
  const quantidade = event.target.elements['quantidade'].value;
  criaElemento(nome, quantidade);
});