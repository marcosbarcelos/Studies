var option = prompt('Escolha a operação: 1: Soma, 2: sub, 3: mult, 4: div');
var num1 = prompt('Digite um número');
var num2 = prompt('Digite um outro número');

num1 = parseInt(num1);
num2 = parseInt(num2);

switch(option) {
  case '1':
    alert(num1 + num2);
    break;
  case '2':
    alert(num1 - num2);
    break;
  case '3':
    alert(num1 * num2);
    break;
  case '4':
    alert(num1 / num2);
    break;
}