Algoritmo "semnome"

Var
   n1, n2 : inteiro


Inicio
   escreva("Numero 1: ")
   leia(n1)
   escreva("Numero 2: ")
   leia(n2)
   
   se (n1 % n2 = 0) ou (n2 % n1 = 0) entao
      escreva("São multiplos")
   senao
      escreva("Não são multiplos")
   Fimse
Fimalgoritmo