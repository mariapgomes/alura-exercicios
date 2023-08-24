async function consultaEndereco(cep) {
  const cidade = document.querySelector('#cidade');
  const logradouro = document.querySelector('#endereco');
  const bairro = document.querySelector('#bairro');
  const estado = document.querySelector('#estado');
  const mensagemErro = document.querySelector('#erro');

  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaConvertida = await consultaCEP.json();
    
    if (consultaConvertida.erro) {
      throw Error('CEP não existente');
    }

    cidade.value = consultaConvertida.localidade;
    logradouro.value = consultaConvertida.logradouro;
    bairro.value = consultaConvertida.bairro;
    estado.value = consultaConvertida.uf;
    
    console.log(consultaConvertida);
    return consultaConvertida;
    
  } catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
  }

}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => consultaEndereco(cep.value));