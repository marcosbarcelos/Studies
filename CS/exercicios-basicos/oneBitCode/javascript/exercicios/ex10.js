/* filtrar o nome das naves com + de 9 tripulantes
   informar o numero da plataforma em que  está a primeira nave que ainda está  com engate pendente - utilizar findIndex
   Destacar o nome de todas naves colando-as e em caixa alta
   exibir um alerta com as informações
*/

//0- nome, 1-tripulantes e 2-engate
//a plataforma de engate é o index da nave + 1
const hitchedSpaceships = [
  ['Fenix', 8, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwin', 15, false],
];

const with9Trip = hitchedSpaceships
  .filter((element) => {
    return element[1] > 9; //encontrar os numeros de tripulantes maiores que 9
  })
  .map((element) => {
    return element[0]; //pega o nome dessa nave
  });

const inProcess = hitchedSpaceships.findIndex((element) => {
  return element[2] == false;
});

const upSpaceships = hitchedSpaceships.map((currentSpaceship) => {
  return currentSpaceship[0].toUpperCase();
});

alert(
  `Espaçonaves com mais de 9 tripulantes: ${with9Trip.join(
    ', '
  )} \nPlataforma com processo de engate: ${
    inProcess + 1
  } \nEspaçonaves destacadas: ${upSpaceships.join(', ')}`
);
