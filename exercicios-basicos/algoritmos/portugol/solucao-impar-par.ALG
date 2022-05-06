Algoritmo "semnome"

Var
  quant, n : inteiro
Inicio
      escreva("Quantos numeros voce vai digitar? ")
      leia(quant)
      
      para quant de 1 ate quant faca
             escreva("Digite um número: ")
             leia(n)
             
             se n = 0 entao
                escreval("NULO")
             senao
                se (n % 2 = 0) e (n > 0) entao
                   escreval("Par e Positivo")
                senao
                   se (n % 2 = 0) e (n < 0) entao
                      escreval("Par e Negativo")
                   senao
                        se (n % 2 <> 0) e (n > 0) entao
                           escreval("Impar e Positivo")
                        senao
                           escreval("Impar e Negativo")
                        fimse
                   fimse
                fimse
             fimse
      fimpara
Fimalgoritmo