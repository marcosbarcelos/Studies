const valorPlano = 50;
const minutosPlano = 100;
const minutosConsumidos = Number(prompt('Digite quantos minutos foram utilizados:'));
let valorFatura;
if (minutosConsumidos > minutosPlano) {
  const sobra = (minutosConsumidos - minutosPlano) * 2;
  valorFatura = valorPlano + sobra
  alert('Valor da fatura: ' + valorFatura.toFixed(2))
} else {
  alert('Valor da fatura: ' + valorPlano,toFixed(2))
}
