var n = parseFloat(prompt("Digite um número:"));

var i = 1;
var mensagem = "";
while (i <= 1000) {
  mensagem += n + " x " + i + " = " + n * i + "<br>";
  i++;
}
document.write(mensagem);
