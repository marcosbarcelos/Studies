let soma = 0;
let i = 0
let idade = Number(prompt('Digite a idade:'))
if (idade < 0) {
  alert('IMPOSSIVEL CALCULAR')
} else {
  while (idade >= 0) {
    soma += idade
    i += 1
    idade = Number(prompt('Digite outra idade:'))
  }
  const media = soma / i
  alert('MÉDIA: ' + media.toFixed(2))
}