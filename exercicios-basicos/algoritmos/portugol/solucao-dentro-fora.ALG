Algoritmo "semnome"

Var
   x : real
   quantidade, dentro, fora : inteiro
Inicio
      dentro <- 0
      fora <- 0
      
      escreva("Quantos numeros voc� ir� digitar? ")
      leia(quantidade)
      
      para quantidade de 1 ate quantidade faca
             escreva("Digite um n�mero ")
             leia(x)
             
             se (x >= 10) e (x <= 20) entao
                dentro <- dentro + 1
             senao
                fora <- fora + 1
             fimse
      fimpara
      
      escreval("DENTRO:", dentro)
      escreva("FORA:", fora)
Fimalgoritmo