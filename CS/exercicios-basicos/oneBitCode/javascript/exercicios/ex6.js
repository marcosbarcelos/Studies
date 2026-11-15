const spaceshipName = prompt('Qual o nome da nave?');
const char = prompt('Qual caractere gostaria de subsituir?');
const newChar = prompt('Qual seria o novo caractere?');
let newSpaceshipName = '';

for (let i = 0; i < spaceshipName.length; i++) {
  if(spaceshipName[i] == char) {
    newSpaceshipName += newChar;
  } else {
    newSpaceshipName += spaceshipName[i];
  }
}

alert('Novo nome da nave: ' + newSpaceshipName);

