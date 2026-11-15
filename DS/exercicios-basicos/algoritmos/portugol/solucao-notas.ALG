Algoritmo "semnome"

Var
   notaPrimeiroSemestre, notaSegundoSemestre, media : real

Inicio
   escreval("Digite a nota do primeiro semestre")
   leia(notaPrimeiroSemestre)
   escreva("Dite a nota do segundo semestre:")
   leia(notaSegundoSemestre)
   
   media <- notaPrimeiroSemestre + notaSegundoSemestre
   escreval("Média:", media:8:1)
   
   se media >= 60 entao
      escreval("Aprovado")
   senao
      escreval("Reprovado")
   Fimse

Fimalgoritmo