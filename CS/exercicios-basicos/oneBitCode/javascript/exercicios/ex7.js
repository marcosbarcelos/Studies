const spaceShipName = prompt('Qual o nome da nave?');
let newSpaceShipName = '';

for(let i = spaceShipName.length - 1; i>=0; i--) {
  if(spaceShipName[i] == 'e') {
    break;
  }
  newSpaceShipName += spaceShipName[i];
} 
alert('Nome da nave: ' + spaceShipName + '\nNome invertido: ' + newSpaceShipName)