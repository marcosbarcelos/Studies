const spaceshipName = prompt('Digite o nome da nave:');
let question = prompt('Deseja entrar em dobra espacial?\n1- Sim\n2- Não');
let double = 0;

while (question == '1') {
  double++;
  question = prompt('Deseja a próxima dobra espacial?\n1- Sim\n2- Não');
}

alert('Nave: ' + spaceshipName + '\nQuantidade de dobras: ' + double);
