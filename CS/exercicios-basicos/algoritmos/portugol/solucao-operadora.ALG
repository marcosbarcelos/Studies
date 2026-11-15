Algoritmo "semnome"

Var
   minutos : inteiro
   valorPago : real

Inicio
   escreval("Digite a quantidade de minutos:")
   leia(minutos)

   valorPago <- 50.00
   se minutos > 100 entao
      valorPago <- valorPago + (minutos - 100) * 2)
      escreva("Valor a pagar:", valorPago:8:2)
   Fimse
   
   escreva("Valor a pagar: 50.00")
Fimalgoritmo