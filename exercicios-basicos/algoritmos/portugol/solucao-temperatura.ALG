Algoritmo "semnome"

Var
   c, f : real
   escala : caractere
Inicio

   escreva("Digite a escala que deseja C/F")
   leia(escala)
   
   se escala = "f" entao
      escreva("Digite a temperatura em Fahrenheit: ")
      leia(f)
      c <- 5 / 9 * (f - 32)
      escreva("Temperatura equivalente em Celsius: ", C:8:2)
   senao
      escreva("Digite a temperatura em Celsius: ")
      leia(c)
      f <- c * 1.8 + 32
      escreva("Temperatura equivalente em Fahrenheit: ", f:8:2)
   Fimse
Fimalgoritmo