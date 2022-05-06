Algoritmo "semnome"

Var
  casos, i, quant, c, r, s, total : inteiro
  tipos : caractere
  pc, pr, ps : real
Inicio
  c <- 0
  r <- 0
  s <- 0
  
  escreva("Quantos casos de teste serao digitados? ")
  leia(casos)
  

  para i de 1 ate casos faca
       escreva("Quantidade de cobaias: ")
       leia(quant)
       
       escreva("Tipo de cobaia (c - r - s): ")
       leia(tipos)
       
       se tipos = "c" entao
          c <- c + quant
       senao
            se tipos = "r" entao
               r <- r + quant
            senao
                 se tipos = "s" entao
                    s <- s + quant
                 fimse
            fimse
       fimse
  fimpara
  
  total <- c + r + s
  pc <- c / total * 100
  pr <- r / total * 100
  ps <- s / total * 100
  
  escreval("RELATORIO FINAL: ")
  escreval("Total:", total)
  escreval("Total de Coelhos: ", c)
  escreval("Total de Ratos:", r)
  escreval("Total de Sapos: ", s)
  escreval("Percentual de Coelhos: ", pc:4:2)
  escreval("Percentual de Ratos: ", pr:4:2)
  escreva("Percentual de Sapos: ", ps:4:2)
Fimalgoritmo