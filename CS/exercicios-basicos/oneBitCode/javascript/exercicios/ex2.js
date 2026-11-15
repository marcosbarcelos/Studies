const pessoaMaisVelhaNome = prompt('Digite o nome da pessoa mais velha:');
const pessoaMaisVelhaIdade = prompt('Digite a idade da pessoa mais velha:');
const pessoaMaisNovaNome = prompt('Digite o nome da pessoa mais nova:');
const pessoaMaisNovaIdade = prompt('Digite o nome da pessoa mais nova:');

const diferenca = pessoaMaisVelhaIdade - pessoaMaisNovaIdade;
alert(
  'Nome da pessoa mais velha: ' +
    pessoaMaisVelhaNome +
    '\nIdade da pessoa mais velha: ' +
    pessoaMaisVelhaIdade +
    '\nNome da pessoa mais nova: ' +
    pessoaMaisNovaNome +
    '\nIdade da pessoa mais nova: ' +
    pessoaMaisNovaIdade +
    '\nDiferença de idade: ' +
    diferenca
);
