Algoritmo "semnome"

Var
 n, i : inteiro
 soma, media : real
 V : vetor [0..10] de real


Inicio
  soma <- 0
  media <- 0
  
  escreva("Quantos numeros voce vai digitar? ")
  leia(n)
  
  para i de 0 ate n-1 faca
       escreva("Digite um numero: ")
       leia(V[i])
  fimpara
  
  escreval()
  escreva("VALORES: ")
  para i de 0 ate n-1 faca
       escreva(V[i]:3:1, " ")
       soma <- soma + v[i]
       media <- soma / n
  fimpara
  
  escreval()
  escreval("Soma: ", soma:4:2)
  escreva("Media: ", media:4:2)
Fimalgoritmo