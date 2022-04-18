var nota1 = prompt('digite um numero');
var nota2 = prompt('digite um outro numero');

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);

//divisão tem maior importância por a soma entre (), faz ela ser interpretada primeiro
var media = (nota1 + nota2) / 2;
alert('a média é: ' + media)