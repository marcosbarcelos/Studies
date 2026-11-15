//criar um objeto vazio - utilizamos objetos quando as informações só fazem sentidos juntas
let object = {}
console.log(object)

let spaceship = {
  name: 'Fenix',
  crewQuantity: 7,
  type: 'Batalha',
};

//acessa a propriedade type
console.log(spaceship.type); //retorna "Batalha"
//acessa a propreidade type
console.log(spaceship['type']); //retorna "Batalha"

//cria uma nova propriedade visto que ele identifica que essa não existe
spaceship.isHitched = false;
//cria uma nova propriedade visto que ele identifica que essa não existe
spaceship['shieldLevel'] = 100;
console.log(spaceship);


//aninhamento de arrays e objetos

//array dentro de um objeto
let flamengo = {
  name: 'Clube de Regatas Flamengo',
  libertadores: 2,
  idolos: ['Zico', 'Nunes', 'Adílio']
}

//permite o uso de funçoes de arrays
flamengo.idolos.push('Gabigol')
console.log(flamengo)

//objetos dentro de um arrays
let spaceships = [
  {name: 'Elemental', crewQuantity: 10},
  {name: 'Colossus', crewQuantity: 8},
  {name: 'Helmet', crewQuantity: 15},
]
//permite a mesclagem de indices do array e propriedades dos objetos
console.log(spaceships[0].name) //'Elemental'

//também nos habilita utilizar métodos de array em objetos
spaceships.forEach(spaceship => {
  console.log(`${spaceship.name} tem ${spaceship.crewQuantity} passageiros`)
});

//objetos dentro de objetos
let nave = {
  name: 'Golias',
  maxCrew: 20,
  pilot: {
    name: 'Marcos',
    age: 18
  }
}
console.log(nave.pilot.name) //'Marcos'

//funções em objetos
let demeter = {
  name: 'Deméter XV',
  Type: 'Extração',
  maxCrew: 20,
  //por ser uma função ela esta propriedade é chamada de método
  turnOn:  function() {
    console.log('Preparando Propulsão')
    console.log('Ligando computador de bordo')
  }
}
demeter.turnOn()

demeter.velocity = 0;
demeter.speedUp = function(acceleration) {
  //this nos permite referenciar o proprio objeto sem precisar passarmos como parametro, para isso devemos usar funções anônima ou  declarativas
  this.velocity += acceleration
}
demeter.speedUp(10)
console.log(demeter)