const glicose = Number(prompt('Digite a medida da glicose:'));
if (glicose <= 100) {
  alert('Classificação: Normal')
} else if (glicose <= 140) {
  alert('Classificação: Elevado')
} else {
  alert('Classificação: Diabetes')
}