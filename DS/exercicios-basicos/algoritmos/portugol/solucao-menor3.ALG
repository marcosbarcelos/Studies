Algoritmo "semnome"

Var
   n1, n2, n3 : inteiro

Inicio
   escreva("Numero 1: ")
   leia(n1)
   escreva("Numero 2: ")
   leia(n2)
   escreva("Numero 3: ")
   leia(n3)
   
   se (n1 = n2) e (n1 = n3) entao
      escreva("Empate")
   senao
      se (n1 < n2) e (n1 < n3) entao
         escreva("MENOR:", n1)
      senao
           se n2 < n3 entao
              escreva("MENOR:", n2)
           senao
              escreva("MENOR:", n3)
           Fimse
      Fimse
   Fimse
Fimalgoritmo