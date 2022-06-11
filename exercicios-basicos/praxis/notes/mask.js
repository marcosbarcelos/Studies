let inputCPF = document.getElementById('inputCPF');
inputCPF.addEventListener('input', maskCPF);

let arrayCPF = [];
function maskCPF() {
  let numeroCPF = inputCPF.value;
  if(numeroCPF === 0 || isNaN(numeroCPF)) {
    alert('ERRO!');
    inputCPF.focus;
    return;
  } else {

  }
  if (numeroCPF.length == 11) {
    for (let i = 0; i < 11; i++) {
      if (i == 2 || i == 5) {
        arrayCPF.push(numeroCPF[i]);
        arrayCPF.push('.');
      } else if (i == 8) {
        arrayCPF.push(numeroCPF[i]);
        arrayCPF.push('-');
      } else {
        arrayCPF.push(numeroCPF[i]);
      }
    }
    inputCPF.value = arrayCPF.join('')
    console.log(arrayCPF);
  }

}
