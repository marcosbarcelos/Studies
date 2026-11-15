Algoritmo "semnome"

Var
   codigoProduto, quantidade : inteiro
   precoProduto, total : real
Inicio
   escreva("Digite o código do produto (1-5): ")
   leia(codigoProduto)
   escreva("Digite a quantidade: ")
   leia(quantidade)
   
   se codigoProduto = 1 entao
      precoProduto <- 5
   senao
      se codigoProduto = 2 entao
         precoProduto <- 3.50
      senao
         se codigoProduto = 3 entao
            precoProduto <- 4.80
         senao
            se codigoProduto = 4 entao
               precoProduto <- 8.90
            senao
               precoProduto <- 7.32
            Fimse
         Fimse
      Fimse
   Fimse
   total <- precoProduto * quantidade
   escreva("Valor total:", total:6:2)
Fimalgoritmo