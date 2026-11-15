const base = Number(prompt('Digite a base do retângulo:'));
const altura = Number(prompt('Digite a altura do retângulo:'));

const area = base * altura;
const perimetro = 2 * (base + altura);
const diagonal = Math.sqrt((Math.pow(base, 2) + Math.pow(altura, 2)));

alert(`Área do retângulo: ${area.toFixed(4)} \nPerimetro do retângulo: ${perimetro.toFixed(4)} \nDiagonal do retângulo: ${diagonal.toFixed(4)}`);