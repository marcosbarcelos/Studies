var nJogador1 = parseInt(prompt("Jogador 1 digite um número:"));
var nJogador2 = parseInt(prompt("Jogador 2 digite um número:"));

if (nJogador1 === nJogador2) {
  alert("Empate");
} else {
  var numeroSorteado = parseInt(Math.random() * 2);

  if (
    (numeroSorteado === 0 && nJogador1 < nJogador2) ||
    (numeroSorteado === 1 && nJogador1 > nJogador2)
  ) {
    alert("Jogador 1 ganhou");
  } else {
    alert("Jogador 2 ganhou");
  }
  alert(numeroSorteado);
}
