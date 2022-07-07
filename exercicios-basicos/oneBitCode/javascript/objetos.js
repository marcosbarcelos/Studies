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
