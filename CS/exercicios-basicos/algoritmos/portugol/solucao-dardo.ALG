Algoritmo "semnome"

Var
   d1, d2, d3, maior : real
   
Inicio
      escreval("Digite a d1")
      leia(d1)
      escreval("Digite a d2")
      leia(d2)
      escreval("Digite a d3")
      leia(d3)
      
      se (d1 > d2) e (d1 > d3) entao
         maior <- d1
      senao
         se (d2 > d3) entao
           maior <- d2
         senao
           maior <- d3
         Fimse
      Fimse
      
      escreva("Maior Distância:", maior)
Fimalgoritmo