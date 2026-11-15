var n1 = parseInt(prompt("Jogador 1 digite um número:"));
var n2 = parseInt(prompt("Jogador 2 digite um número:"));

if (n1 === n2) {
  alert("Empate");
} else {
  var numeroSorteado = parseInt(Math.random() * 2);

  if (numeroSorteado <= 0) {
    if (n1 < n2) {
      alert("Jogador 1 ganhou");
    } else {
      alert("Jogador 2 ganhou");
    }
  } else {
    if (n1 > n2) {
      alert("Jogador 1 ganhou");
    } else {
      alert("Jogador 2 ganhou");
    }
  }
}
