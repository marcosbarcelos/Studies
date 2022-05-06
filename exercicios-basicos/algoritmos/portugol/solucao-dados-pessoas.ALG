Algoritmo "semnome"

Var
 n, i, nM, nH : inteiro
 altura : vetor [0..10] de real
 genero : vetor [0..10] de caractere
 media, maior, menor : real
Inicio
 escreva("Quantas pessoas serao digitadas? ")
 leia(n)
 
 para i de 0 ate n-1 faca
      escreva("Altura da ", i+1, "a pessoa ")
      leia(altura[i])
      escreva("Genêro da ", i+1, "a pessoa ")
      leia(genero[i])
      
      se (altura[i]) > (altura[i] - 1) entao
         maior <- altura[i]
      senao
           se (altura[i] < (altura[i] - 1) entao
               menor <- altura[i]
           fimse
      fimse
 fimpara

 media <- 0
 nM <- 0
 nH <- 0
 para i de 0 ate n-1 faca
      se (genero[i] = "F") entao
         media <- media + altura[i]
         nM <- nH + 1
      senao
         nH <- nH + 1
      fimse
 fimpara
 
 media <- media / nM
 escreval("Menor altura = ", menor:4:2)
 escreval("Maior altura = ", maior:4:2)
 escreval("Media das alturas das mulheres = ", media:4:2)
 escreva("Numero de homens = ", nH)

Fimalgoritmo