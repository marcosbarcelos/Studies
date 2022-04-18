var n1 = prompt("digite um número");
var n2 = prompt("digite outro número");

n1 = parseInt(n1);
n2 = parseInt(n2);

//calcula o resto de uma divisão
var modulo = n1 % n2;
//calcula potenciação
var exponenciacao = n1 ** n2;

alert('o resto da divisão de ' + n1 + ' e ' + n2 + ' é: ' + modulo)
alert('a potênciação de ' + n1 + ' e ' + n2 + ' é: ' + exponenciacao)

