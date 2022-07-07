//cria um array vazio - utilizamos arrays quando as informações por si sós já fazem sentido
let array = []

// cria um array - estrutura de dados organizada por índices
let teams = ['Flamengo', 'Bahia', 'Corinthians'];
teams[0] //retorna flamengo pois o array parte de 0

//cria um array com 5 posições vazias
let newArray = new Array(5);

//funções com arrays
let spaceships = ['andromeda', 'colossus', 'daenerys'];

//adiciona um elemento ao final do array
spaceships.push('supernova') //- ['andromeda', 'colossus', 'daenerys', 'supernova']

//apaga o ultimo elemento do array e o retorna
spaceships.pop() // - ['andromeda', 'colossus', 'daenerys']

//remove o primeiro elemento do array e o retorna
spaceships.shift() // - ['colossus', 'daenerys']

//adiciona um elemento ao inicio do array
spaceships.unshift('ragnar') // - ['ragnar', 'colossus', 'daenerys']

//retorna o índice do elemento indicado - caso não encontrado indica -1
spaceships.indexOf('colossus') // 1

//retorna o tamanho do array 
spaceships.length // 3

//arrays bidimensionais - matrizes
let carsDream = [['Nissan GTR', 1], ['Mitsubishi Lancer', 2], ['i can?', [true, false]]]
console.log(carsDream[0][0]) // nissan gtr
console.log(carsDream[2][0]) // i can?
console.log(carsDream[2][1][0]) // true


//método splice - altera o array original e retorna os removido
let stars = ['andromeda', 'colossus', 'daenerys', 'dream'];
stars.splice(1, 3, 'démeter', 'puller', 'goliathus', 'rare atomic') // remove do índice 1 ao 3 e adiciona os indicados em seus lugares
console.log(stars)

//slice - extrai uma parte do array sem alterar o original
let food = ['feijão', 'hamburger', 'batata frita', 'refri']
let sliced = food.slice(1, 3) // extrai hamburger e batata frita pois o  indice fina(3) serve apenas como base para pegar o anterior a ele
console.log(sliced) // retorna os extraidos - hamburger e batata frita

//iteração em arrays
const numbers = [1, 2, 3, 4, 5];
let hitchedStars = ['andromeda', 'colossus', 'daenerys', 'dream'];

//método forEach, percorre todo o array e retorna o elemento, o indice e seu array encontrado por meio de callback - apenas o elemento é obrigatório
numbers.forEach((number, index) => {
  console.log('Index: ' + index + ' Value: ' + number);
});

//método map, utiliza-se de um array original como base para gerar um novo sem que o antigo sofra alterações
let upCasedStar = hitchedStars.map(function(currentStar) {
  let upCased = currentStar.toUpperCase()
  return upCased
}) 

console.log(upCasedStar) // retorna um novo array com base no original só que com tudo maiúsculo sem que altere o original


//método filter, utiliza-se de um array original como base para gerar um novo com base em condições sem que o antigo sofra alterações
let with7Chars = hitchedStars.filter(element => {return element.length >= 7})
console.log(with7Chars) // retorna apenas os elemento que tiverem 7 ou mais letras

let with7Charset = hitchedStars.find(element => {return element.length >= 7})
console.log(with7Chars) // retorna o primeiro elemento que tiver 7 ou mais letras