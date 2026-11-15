Algoritmo "semnome"

Var
 quantidade, i, n, soma : inteiro

Inicio

    escreva("Quantos números serão digitados? ")
    leia(quantidade)
    soma <- 0
  
    para i de 1 ate quantidade faca
       escreva("Digite um número: ")
       leia(n)
       soma <- soma + n
    fimpara

    escreva("Soma: ", soma)
 
Fimalgoritmo