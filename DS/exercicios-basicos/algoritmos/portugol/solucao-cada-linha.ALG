Algoritmo "semnome"

Var
   mat: vetor [0..10, 0..10] de inteiro
   M, i, j, maior : inteiro
Inicio
   escreva("Quantas a ordem da matriz ")
   leia(M)
   

   para i de 0 ate M-1 faca
        para j de 0 ate M-1 faca
             escreva("Elemento [", i, ",", j, "]: ")
             leia(mat[i, j])
        fimpara
   fimpara
   
   maior <- 0
    escreval("MAIOR ELEMENTO DE CADA LINHA:")
     para i de 0 ate M-1 faca
        maior <- mat[i, 0]
        para j de 0 ate M-1 faca
             se mat[i, j] > maior entao
                maior <- mat[i, j]
             fimse
        fimpara
        escreval(maior)
   fimpara

   
Fimalgoritmo