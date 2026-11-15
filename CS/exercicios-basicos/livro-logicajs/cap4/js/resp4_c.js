const btVerificar = document.getElementById('btVerificar');

function verificaNumeroPerfeito() {
  const inNumero = document.getElementById('inNumero');
  const outDivisores = document.getElementById('outDivisores');
  const outResposta = document.getElementById('outResposta');
  
  const numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert('Informe um número válido!');
    inNumero.focus();
    return;
  }
  
  let divisores = `Divisores do ${numero}: 1`;
  let soma = 1;

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i == 0){
      divisores = divisores + ", " + i;  // vírgula + i (evita última vírgula) 
      soma = soma + i;
    }
  }

  divisores = divisores + " (Soma: " + soma + ")";

  // altera o conteúdo de outDivisores
  outDivisores.textContent = divisores;

  // verifica se é perfeito e exibe resposta na tag outResposta
  if (numero == soma) {
    outResposta.textContent = numero + " É um Número Perfeito";
  } else {
    outResposta.textContent = numero + " Não É um Número Perfeito";
  }
}

btVerificar.addEventListener('click', verificaNumeroPerfeito);