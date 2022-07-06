const distance = Number(prompt('Qual a distância em anos luz?'));
const options = prompt(
  'Para qual medida gostaria de converter? \n1 - Parsec \n2 - Unidade Astronômica \n3 - Quilômetros'
);
let convertDistance;
let unity;

switch (options) {
  case '1':
    unity = 'Parsec';
    convertDistance = distance * 0.306601;
    break;
  case '2':
    unity = 'Unidade Astrônomica';
    convertDistance = distance * 63241.1;
    break;
  case '3':
    unity = 'Quilômetros';
    convertDistance = distance * 9.5 * Math.pow(10, 12);
    break;
  default:
    alert(
      'Distância em anos luz: ' +
        distance +
        '\nConversão desejada: ' +
        'Conversão fora do escopo'
    );
    return;
}

alert(
  'Distância em anos luz: ' +
    distance +
    '\nDistância em ' +
    unity +
    ': ' +
    convertDistance
);
