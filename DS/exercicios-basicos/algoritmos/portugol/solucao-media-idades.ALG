Algoritmo "semnome"

Var
  idade, soma, cont : inteiro
  media : real

Inicio
  soma <- 0
  cont <- 0

  escreva("Digite a idade: ")
  leia(idade)

  se (idade < 0) entao
     escreva("IMPOSSIVEL CALCULAR")
  senao
     enquanto (idade >= 0) faca
              soma <- soma + idade
              cont <- cont + 1

              escreva("Digite outra idade: ")
              leia(idade)
     fimenquanto

     media <- soma / cont
     escreva("MEDIA: ", media:4:2)
  fimse
Fimalgoritmo