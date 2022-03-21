const btCriar = document.getElementById('btCriar');

function criarEstrelas() {
  const inLinhas = document.getElementById('inLinhas');
  const outResposta = document.getElementById('outResposta');

  const totalLinhas = Number(inLinhas.value);

  if (totalLinhas == 0 || isNaN(totalLinhas)) {
    alert('Informe um número válido');
    inLinhas.focus();
    return;
  }

  let estrelas = ''

  for (let i = 1; i <= totalLinhas; i++) {
    for (let j = 1; j <= i; j++) {
      estrelas = estrelas + '*';
    }
    estrelas = estrelas + '\n';
  }
  
  outResposta.textContent = estrelas;
}

btCriar.addEventListener('click', criarEstrelas);