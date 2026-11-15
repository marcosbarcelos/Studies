let velocity = 50;
const aceleration = 5;

//laço de repetição while - indicado para quando não sabemos o numero de vezes de iteração
while (velocity <= 100) {
  console.log('Estamos acelerando a ' + velocity + 'km/s');
  velocity += aceleration;
}

let spaceship = 'Helmet';
let newSpaceship = '';
//laço de repetição for - ideal para quando se sabe o numero de iteração
for (let i = 0; i < spaceship.length; i++) {
  if (spaceship[i] == 'e') {
    newSpaceship += 'i';
  } else {
    newSpaceship += spaceship[i];
  }
}

for (let i = 0; i < spaceship.length; i++) {
  if (spaceship[i] == 'e') {
    break; //força a saída do laço
  } else {
    newSpaceship += spaceship[i];
  }
}

console.log(newSpaceship);

// laço de repetição do..while - garante que o código será executado pelo menos uma vez antes da condição ser testada
velocity = 110;
do {
  console.log('Acelerando a ' + velocity + 'km/s');
  velocity+= aceleration
} while(velocity<=100)