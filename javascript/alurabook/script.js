async function consultaEndereco(cep) {
  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaConvertida = await consultaCEP.json();

    if (consultaConvertida.erro) {
      throw Error('CEP não existente')
    }

    return consultaConvertida;
    
  } catch (erro) {
    console.log(erro)
  }

}

consultaEndereco(cep);