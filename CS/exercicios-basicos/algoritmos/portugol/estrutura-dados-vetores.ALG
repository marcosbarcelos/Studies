Algoritmo "semnome"

Var
   n, i : inteiro
   vet : vetor [0..10] de real

Inicio
   escreva("Quantos números irá digitar (max 10)?")
   leia(n)
   
   para i de 0 ate n-1 faca
        escreva("Digite um número: ")
        leia(vet[i])
   fimpara
   
   escreval("Numeros Digitados:")
   para i de 0 ate n-1 faca
        escreval(vet[i])
   fimpara

Fimalgoritmo