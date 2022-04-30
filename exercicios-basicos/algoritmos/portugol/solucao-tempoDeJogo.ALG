Algoritmo "semnome"

Var
   horarioInicial, horarioFinal, tempoDeJogo : real

Inicio

   escreva("Horario Inicial: ")
   leia(horarioInicial)
   escreva("Horario Final: ")
   leia(horarioFinal)
   
   se (horarioFinal > horarioInicial) entao
      tempoDeJogo <- horarioFinal - horarioInicial
   senao
        tempoDeJogo <- (24 - horarioInicial) + horarioFinal
   Fimse
   
   escreva("Tempo de Jogo:", tempoDeJogo)

Fimalgoritmo