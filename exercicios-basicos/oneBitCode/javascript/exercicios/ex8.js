let velocity = 0;
let unity = 'km/s';
const spaceshipName = prompt('Nome da Nave: ');

menu();
function menu() {
  const chosen = prompt(
    'Escolha uma opção: ' +
      '\n1 - Acelerar a nave em 5km/s' +
      '\n2 - Desacelerar a nave em 5km/s' +
      '\n3 - Imprimir dados de bordo' +
      '\n4 - Sair'
  );
  switch (chosen) {
    case '1':
      speedUp();
      break;
    case '2':
      speedDown();
      break;
    case '3':
      printInfo();
      break;
    default:
      return;
  }
}

function speedUp() {
  velocity += 5;
  menu();
}

function speedDown() {
  if (velocity === 0) {
    alert('A nave não pode ter velocidade menor que 0' + unity);
    menu();
  } else {
    velocity -= 5;
    menu();
  }
}

function printInfo() {
  alert(
    'Nome da nave: ' +
      spaceshipName +
      '\nVelocidade da nave: ' +
      velocity +
      unity
  );
  menu()
}
