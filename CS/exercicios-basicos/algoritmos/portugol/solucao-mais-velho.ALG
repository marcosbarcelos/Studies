Algoritmo "semnome"

Var
 n, i : inteiro
 NOME : vetor [0..10] de caractere
 IDADE : vetor [0..10] de inteiro
 maisVelha : caractere
Inicio
  escreva("Quantas pessoas voce vai digitar? ")
  leia(n)
  
  para i de 0 ate n-1 faca
       escreval("Dados da", i+1,"a pessoa:")
       escreva("NOME:")
       leia(NOME[i])
       escreva("IDADE:")
       leia(IDADE[i])
  fimpara
  
  para i de 0 ate n-1 faca
       se (IDADE[i]) > (IDADE[i] - 1) entao
          maisVelha <- NOME[i]
       fimse
  fimpara
  escreva("PESSOA MAIS VELHA: ", maisVelha)

Fimalgoritmo