const escala = prompt('Voce vai digitar a temperatura em qual escala? \nC - Celsius \nF - FarenHeit');
const temperaturaInicial = Number(prompt('Digite a temperatura em ' + escala));
let temperaturaConvertida;

if (escala == 'F') {
  temperaturaConvertida = 5/9 * (temperaturaInicial - 32)  
} else {
  temperaturaConvertida = temperaturaInicial * 1.8 + 32;
}

alert('Temperatura equivalente: ' + temperaturaConvertida.toFixed(2))