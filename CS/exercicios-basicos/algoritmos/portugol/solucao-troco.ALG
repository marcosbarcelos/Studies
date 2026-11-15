Algoritmo "semnome"
//Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
//O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
//e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve
//mostrar o valor do troco a ser devolvido ao cliente. //Fazer um programa para ler dois valores inteiros X e Y, e depois mostrar na tela o valor da soma destes
//números.
Var

   valorUnidade, valorRecebido, troco : real
   quantidade : inteiro

Inicio
   escreva("Preço unitário do produto:")
   leia(valorUnidade)
   escreva("Quantidade comprada:")
   leia(quantidade)
   escreva("Dinheiro recebido:")
   leia(valorRecebido)
   
   troco <- valorRecebido - (valorUnidade * quantidade)
   escreva("Troco: ", troco:8:2)

Fimalgoritmo