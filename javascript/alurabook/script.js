async function consultaEndereco(cep) {
  const cidade = document.querySelector('#cidade');
  const logradouro = document.querySelector('#endereco');
  const estado = document.querySelector('#estado');

  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaConvertida = await consultaCEP.json();
    
    if (consultaConvertida.erro) {
      throw Error('CEP não existente');
    }

    cidade.value = consultaConvertida.localidade;
    logradouro.value = consultaConvertida.logradouro;
    estado.value = consultaConvertida.uf;
    
    console.log(consultaConvertida);
    return consultaConvertida;
    
  } catch (erro) {
    console.log(erro);
  }

}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => consultaEndereco(cep.value));