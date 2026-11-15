const nome1 = prompt('Digite o nome da primeira pessoa:');
const idade1 = Number(prompt('Digite a idade da primeira pessoa:'));
const nome2 = prompt('Digite o nome da segunda pessoa:');
const idade2 = Number(prompt('Digite a idade da segunda pessoa:'));

const media = (idade1 + idade2) / 2;
alert(`A idade média de ${nome1} e ${nome2} é de ${media}`);
