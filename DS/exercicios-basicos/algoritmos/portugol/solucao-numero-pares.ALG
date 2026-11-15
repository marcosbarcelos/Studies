Algoritmo "semnome"

Var
   n, i, pares : inteiro
   V : vetor [0..10] de real

Inicio
      pares <- 0
   escreva("Quantos números irá digitar? ")
   leia(n)
   
   para i de 0 ate n-1 faca
        escreva("Digite um número: ")
        leia(V[i])
   fimpara
   
   escreval()
   
   escreval("NUMEROS PARES:")
   para i de 0 ate n-1 faca
        se (V[i] % 2 = 0) entao
           escreva(V[i], " ")
           pares <- pares + 1
        fimse
   fimpara
   
   escreval()
   
   escreva("QUANTIDADE DE PARES: ", pares)
Fimalgoritmo