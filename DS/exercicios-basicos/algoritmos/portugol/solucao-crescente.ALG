Algoritmo "semnome"

Var
   x, y : inteiro


Inicio
      escreval("Digite dois números")
      leia(x)
      leia(y)

      enquanto x <> y faca
               se x > y entao
                  escreval("Decrescente!")
               senao
                  escreval("Crescente!")
               fimse
      
               escreval("Digite outros dois número")
               leia(x)
               leia(y)
      fimenquanto

Fimalgoritmo