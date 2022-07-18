const nota1 = Number(prompt('Digite a primeira nota:'));
const nota2 = Number(prompt('Digite a segunda nota:'));

const notaFinal = nota1 + nota2;
if (notaFinal < 60) {
  alert('Nota final: ' + notaFinal.toFixed(1) + '\n REPROVADO')
} else {
  alert('Nota final: ' + notaFinal.toFixed(1) + '\n APROVADO')
}