Algoritmo "semnome"
//Fazer um programa para ler o valor "r" do raio de um círculo, e depois mostrar o valor da área do
//círculo com três casas decimais. A fórmula da área do círculo é a seguinte: ???????? = ??. ??
//?
//. Você pode
//usar o valor de ?? fornecido pela biblioteca da sua linguagem de programação, ou então, se preferir, use
//diretamente o valor 3.14159.

Var

   raio, area : real

Inicio
   escreva("Valor do Raio:")
   leia(raio)
   
   area <- pi * Exp(raio, 2)
   escreva("Área di circulo: ", area:8:3)
   

Fimalgoritmo