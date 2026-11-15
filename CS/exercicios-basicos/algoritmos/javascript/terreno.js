const largura = Number(prompt('Digite a largura do terreno:'));
const comprimento = Number(prompt('Digite o comprimento do terreno:'));
const valorMetro = Number(prompt('Digite o valor do metro quadrado do terreno:'));

const areaTerreno = largura * comprimento;
const valorTerreno = areaTerreno * valorMetro;

alert(`Área do terreno: ${areaTerreno.toFixed(2)} \nValor do terreno: ${valorTerreno.toFixed(2)}`);