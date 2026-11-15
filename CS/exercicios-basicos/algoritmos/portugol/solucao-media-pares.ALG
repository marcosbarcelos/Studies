Algoritmo "semnome"

Var
   n, i, pares, nPares : inteiro
   V : vetor [0..10] de inteiro
   media : real
Inicio
      pares <- 0
      nPares <- 0
      media <- 0
      escreva("Quantos elementos vai ter o vetor? ")
      leia(n)
      
      para i de 0 ate n-1 faca
           escreva("Digite um número: ")
           leia(V[i])
           
           se V[i] % 2 = 0 entao
              pares <- pares + V[i]
              nPares <- nPares + 1
           fimse
      fimpara
      
      se pares = 0 entao
         escreval("NENHUM NÚMERO PAR")
      senao
         media <- pares / nPares
         escreva("MEDIA PARES = ", media:2:1)
      fimse

Fimalgoritmo