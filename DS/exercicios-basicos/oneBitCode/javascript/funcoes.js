//função sem parametro
function greetPilot() {
  alert('Olá, Piloto!');
  prompt('Qual o seu nome?');
}
greetPilot();
 
//função com parâmetro na chamda
function speedUp(velocity, aceleration) {
  let newVelocity = velocity + aceleration;
  console.log('Nova velocidade: ' + newVelocity);
}
speedUp(60, 40);

//função com parâmetro padrão - caso o informado na chamada não exista o padrão corresponderá
function greetPilotTwo(name, message = 'olá') {
  alert(message + ', ' + name);
}
greetPilotTwo('Marcos', 'seja bem-vindo')

//função com retorno
function parImp(n) {
  if (n % 2 == 0) {
    return 'par'
  } else {
    return 'impar'
  }
}
console.log(parImp(5));

//função anônima - permite mais facilidade de atribuição a variaveis mas não pode ser chamada antes da declaração
let doubleSpeed = function(velocity) {
  return velocity * 2;
}
console.log(doubleSpeed(80))

//arrow function - omite o nome e a palavra reservada, é uma simplificação da função anonima e tbm não permite ser chamda antes da declaração
const doubleVelocity = (velocity) => {
  return velocity * 2
}
console.log(doubleVelocity(90))

//forma simplifica de declarar uma arrow function com apenas uma linha de retorno.
const doubleVelocity2 = (velocity) => velocity * 2;

//high order function - são funcções que retorna outra função ou toma outra função como parâmetro
const getMultiplier = multiplier => aNumber => aNumber * multiplier
const double = getMultiplier(2)
