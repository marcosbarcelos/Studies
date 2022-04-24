//entrada de dados
var num1 = prompt("Insira um número");
var num2 = prompt("Insira um segundo número");

//converte os dados otidos como string para number com casa decimal
num1 = parseFloat(num1);
num2 = parseFloat(num2);

/* parseFloat - converte para numero e mantém as casas decimais
   parseInt - converte para numeros mas retira a casa decimal */

//operção matemática de soma
var soma = num1 + num2;
//saída de dados
alert("O resultado de sua soma é: " + soma);
