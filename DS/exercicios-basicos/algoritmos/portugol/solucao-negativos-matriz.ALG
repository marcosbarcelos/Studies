Algoritmo "semnome"

Var
   mat: vetor [0..10, 0..10] de inteiro
   linhas, colunas, i, j : inteiro
Inicio
   escreva("Qual a quantidade de linhas da matriz ")
   leia(linhas)
   escreva("Qual a quantidade de colunas da matriz ")
   leia(colunas)
   
   para i de 0 ate linhas-1 faca
        para j de 0 ate colunas-1 faca
             escreva("Elemento [", i, ",", j, "]: ")
             leia(mat[i, j])
        fimpara
   fimpara

   escreval("NUMEROS NEGATIVOS:")
   para i de 0 ate linhas-1 faca
        para j de 0 ate colunas-1 faca
             se mat[i, j] < 0 entao
               escreva(mat[i, j], " ")
             fimse
        fimpara
   fimpara
Fimalgoritmo