Algoritmo "semnome"

Var
 n, i : inteiro
 V : vetor [0..10] de inteiro


Inicio
   escreva("Quantos número você irá digitar? max10 ")
   leia(n)
   
   para i de 0 ate n-1 faca
        escreva("Digite um número ")
        leia(V[i])
   fimpara
   
   escreval("NUMEROS NEGATIVOS:")
   para i de 0 ate n-1 faca
        se v[i] < 0 entao
           escreval(v[i])
        fimse
   fimpara

Fimalgoritmo