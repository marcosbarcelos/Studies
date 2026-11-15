Algoritmo "semnome"

Var
   quantidadeGlicose : real
   
Inicio
   escreval("Digite sua quantidade de glicose")
   leia(quantidadeGlicose)
   
   se quantidadeGlicose <= 100 entao
      escreval("Classificação: normal")
   senao
      se quantidadeGlicose <= 140 entao
         escreval("Classificação: Elevado")
      senao
           escreval("Classificação: Diabetes")
      Fimse
   Fimse

Fimalgoritmo