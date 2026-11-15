Algoritmo "semnome"
//Fazer um programa para ler o nome de um(a) funcionário(a), o valor que ele(a) recebe por hora, e a
//quantidade de horas trabalhadas por ele(a). Ao final, mostrar o valor do pagamento do funcionário com
//uma mensagem explicativa, conforme exemplo.


Var
   nome : caractere
   ganhoPorHora, horasTrabalhadas, salario : real

Inicio
   escreva("Digite seu nome:")
   leia(nome)
   escreva("Ganho por Hora:")
   leia(ganhoPorHora)
   escreva("Horas Trabalhadas:")
   leia(horasTrabalhadas)
   
   salario <- ganhoPorHora * horasTrabalhadas
   escreva("O pagamento para ", nome, " deve ser ", salario:8:2)
   

Fimalgoritmo