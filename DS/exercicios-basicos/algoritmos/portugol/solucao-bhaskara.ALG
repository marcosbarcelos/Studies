Algoritmo "semnome"

Var
   a, b, c, delta, x1, x2 : real


Inicio

   escreva("Digite o coeficiente A: ")
   leia(a)
   escreva("Digite o coeficiente B: ")
   leia(b)
   escreva("Digite o coeficiente C: ")
   leia(c)
   
   se (a = 0) ou (delta < 0) entao
    escreva("Esta equacao nao possui raizes reais")
    
   Senao
   delta <- Exp(b, 2) - 4 * a * c
   x1 <- (-b + raizq(delta)) / (2 * a)
   x2 <- (-b - raizq(delta)) / (2 * a)
   Fimse
   
   escreval("x1:", x1:8:4)
   escreval("x2:", x2:8:4)
   
Fimalgoritmo