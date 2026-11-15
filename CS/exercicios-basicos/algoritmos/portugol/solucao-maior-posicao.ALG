Algoritmo "semnome"

Var
   n, i, posicao : inteiro
   V : vetor [0..10] de real
   maior : real

Inicio
  escreva("Quanto numeros voce vai digitar? ")
  leia(n)
  
  para i de 0 ate n-1 faca
       escreva("Digite um numero: ")
       leia(V[i])
  fimpara
  
  maior <- V[0]
  para i de 0 ate n-1 faca
       se V[i] > maior entao
          maior <- V[i]
          posicao <- i
       fimse
  fimpara
  
  escreval("MAIOR:", maior)
  escreva("POSIÇÃO:", posicao)
Fimalgoritmo