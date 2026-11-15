Algoritmo "estrutura_condicional"


Var
   horas : inteiro


Inicio
   escreval("Digite uma hora do dia")
   leia(horas)
   
   se horas < 12 entao
      escreval("Bom Dia")
   senao
      se horas < 18 entao
         escreval("Boa Tarde")
      senao
         escreval("Boa Noite")
      fimse
   fimse
   
Fimalgoritmo