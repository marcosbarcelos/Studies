const btVerificar = document.getElementById('btVerificar');

function verificaParOuImpar() {
  const inNumero = document.getElementById('inNumero');
  const outResposta = document.getElementById('outResposta');

  //obtém valor do campo de entrada
  const numero = inNumero.value;

  if (numero == 0 || isNaN(numero)) {
    alert('Número inválido.');
    inNumero.focus();
    return;
  }

  if (numero % 2 == 0) {
    outResposta.textContent = 'Resposta: ' + numero + ' é Par';
  } else {
    outResposta.textContent = 'Resposta: ' + numero + ' é Ímpar';
  }
}

btVerificar.addEventListener('click', verificaParOuImpar);
