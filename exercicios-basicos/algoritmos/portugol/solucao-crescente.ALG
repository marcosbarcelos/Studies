Algoritmo "semnome"

Var
   x, y : inteiro


Inicio
      escreval("Digite dois n�meros")
      leia(x)
      leia(y)

      enquanto x <> y faca
               se x > y entao
                  escreval("Decrescente!")
               senao
                  escreval("Crescente!")
               fimse
      
               escreval("Digite outros dois n�mero")
               leia(x)
               leia(y)
      fimenquanto

Fimalgoritmo