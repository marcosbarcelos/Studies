Algoritmo "semnome"

Var
   valor, valorRecebido, troco, resto : real
   quantidade : inteiro
   
Inicio

   escreval("Digite o valor unitário:")
   leia(valor)
   escreval("Digite a quantidade comprada:")
   leia(quantidade)
   escreva("Valor Recebido:")
   leia(valorRecebido)
   
   se valorRecebido >= (valor * quantidade) entao
      troco <- valorRecebido  -  (valor * quantidade)
      escreval("Troco:", troco:8:2)
   senao
      resto <- (valor * quantidade) - valorRecebido
      escreval("VALOR INSUFICIENTE. FALTAM", resto:8:2, " Reais")
   Fimse
Fimalgoritmo