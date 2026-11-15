Algoritmo "semnome"

Var
   mat: vetor [0..10, 0..10] de inteiro
   M, i, j, cont : inteiro
Inicio
   cont <- 0
   escreva("Quantas a ordem da matriz ")
   leia(M)
   
   para i de 0 ate M-1 faca
        para j de 0 ate M-1 faca
             escreva("Elemento [", i, ",", j, "]: ")
             leia(mat[i, j])
             se mat[i, j] < 0 entao
                cont <- cont + 1
             fimse
        fimpara
   fimpara
        
    escreval("Diagonal Principal: ")
    para i de 0 ate M-1 faca
         escreva(mat[i, i], " ")
   fimpara
   escreval
   escreva("QUANTIDADE DE NEGATIVOS: ", cont)

   
Fimalgoritmo