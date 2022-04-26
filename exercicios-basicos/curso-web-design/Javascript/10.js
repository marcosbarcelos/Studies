var nota1 = parseFloat(prompt("Digite a primeira nota"));
var nota2 = parseFloat(prompt("Digite a segunda nota"));
var media = (nota1 + nota2) / 2;

if (media >= 5 && nota1 > 0 && nota2 > 0) {
  alert("Parabéns, você foi aprovado.");
} else {
  alert("Você foi reprovado");
}
