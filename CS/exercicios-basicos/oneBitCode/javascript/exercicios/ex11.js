let spaceship = {
  name: prompt('Digte o nome da nave:'),
  type: prompt('Digte o tipo da nave:'),
  maxVelocity: prompt('Digte a velocidade máxima da nave:'),
  velocity: 0,
  speedUp: function (acceleration) {
    this.velocity += acceleration;
  },
};

function accelerate() {
  let acceleration = Number(prompt('Quanto você quer acelerar?'));
  spaceship.speedUp(acceleration);
  if (spaceship.velocity > spaceship.maxVelocity) {
    alert(
      'Velocidade máxima ultrapasada' +
        '\nVelocidade nave: ' +
        spaceship.velocity +
        '\nVelocidade máxima: ' +
        spaceship.maxVelocity
    );
  }
}

function stop() {
  alert(
    'Nome da nave: ' +
      spaceship.name +
      '\n Tipo da nave: ' +
      spaceship.type +
      '\n Ultima velocidade: ' +
      spaceship.velocity
  );
}

function showMenu() {
  let chosenOption;
  do {
    chosenOption = Number(prompt('1 - Acelerar \n 2 - Parar'))
    switch (chosenOption) {
      case 1:
        accelerate();
        break;
      case 2:
        stop();
        break;
      default:
        alert('Opção inválida');
    }
  } while(chosenOption != 2)   
}
showMenu();
