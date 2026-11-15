// Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.

function divisivelPorTres(x) {
  if (x % 3 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divisivelPorTres(3));
