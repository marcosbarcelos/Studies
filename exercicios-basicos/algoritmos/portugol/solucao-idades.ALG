Algoritmo "semnome"
//Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os
//nomes e a idade média entre essas pessoas, com uma casa decimal, conforme exemplo.

Var

   nome1, nome2 : caractere
   idade1, idade2 : inteiro
   idadeMedia : real

Inicio

   escreval("Dados da Primeira Pessoa:")
   escreva("Nome:")
   leia(nome1)
   escreva("Idade:")
   leia(idade1)
   
   escreval()
   
   escreval("Dados da Segunda Pessoa:")
   escreva("Nome:")
   leia(nome2)
   escreva("Idade:")
   leia(idade2)
   
   escreval()
   
   idadeMedia <- (idade1 + idade2) / 2
   escreva("A idade média de ", nome1, " e ", nome2, " é de ", idadeMedia:4:1, " anos.")
Fimalgoritmo