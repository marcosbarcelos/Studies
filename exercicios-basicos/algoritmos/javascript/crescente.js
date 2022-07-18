let x = Number(prompt('Digite o primeiro número'));
let y = Number(prompt('Digite o segundo número'));

while (x != y) {
  if (x > y) {
    alert('Decrescente!');
  } else {
    alert('Crescente!');
  }

  x = Number(prompt('Digite outro primeiro número'));
  y = Number(prompt('Digite outro segundo número'));
}
