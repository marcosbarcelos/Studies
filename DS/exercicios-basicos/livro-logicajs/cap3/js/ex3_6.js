const btExibir = document.getElementById('btExibir');

function calcularNotas() {
  //referencia elementos HTML
  const inSaque = document.getElementById('inSaque');
  const outNotasCem = document.getElementById('outNotasCem');
  const outNotasCinquenta = document.getElementById('outNotasCinquenta');
  const outNotasDez = document.getElementById('outNotasDez');

  //limpa os campos de saida, caso uma segunda partida.
  outNotasCem.textContent = '';
  outNotasCinquenta.textContent = '';
  outNotasDez.textContent = '';

  //obtém o valor do campo de entrada
  const saque = inSaque.value;

  //verifica se os campos estão preenchidos
  if (saque == 0 || isNaN(saque)) {
    alert('Informe o valor de saque corretamente.');
    inSaque.focus();
    return;
  }

  //verifica se o valor de saque é multiplo de 10
  if (saque % 10 != 0) {
    alert('Valor inválido para notas disponíveis (R$ 10, 50, 100)');
    inSaque.focus();
    return;
  }

  //calcula a quantidade de notas de 100
  const notasCem = Math.floor(saque / 100);
  let resto = saque % 100;

  //calcula a quantidade de notas de 50
  const notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;
  //calcula a quantidade de notas de 10
  const notasDez = Math.floor(resto / 10);

  //exibe a quantidade de notas quando necessário
  if (notasCem > 0) {
    outNotasCem.textContent = 'Notas de R$ 100: ' + notasCem;
  }

  if (notasCinquenta > 0) {
    outNotasCinquenta.textContent = 'Notas de R$ 50: ' + notasCinquenta;
  }

  if (notasDez > 0) {
    outNotasDez.textContent = 'Notas de R$ 10: ' + notasDez;
  }
}

btExibir.addEventListener('click', calcularNotas);
