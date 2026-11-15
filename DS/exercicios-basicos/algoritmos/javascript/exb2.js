// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function calculator(x, y) {
  console.log(`A soma de ${x} e ${y} é igual a: ` + (x + y))
  console.log(`A subtração de ${x} e ${y} é igual a: ` + (x - y))
  console.log(`A multiplicação de ${x} e ${y} é igual a: ` + (x * y))
  console.log(`A divisão de ${x} e ${y} é igual a: ` + (x / y))
}
calculator(10, 5);