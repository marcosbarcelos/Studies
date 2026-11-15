Algoritmo ""
//Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor
//da área, perímetro e diagonal deste retângulo, com quatro casas decimais, conforme exemplos.

Var
   base, altura, area, perimetro, diagonal : real


Inicio
   escreva("Digite a base do retângulo:")
   leia(base)
   escreva("Digite a altura do retângulo:")
   leia(altura)
   
   area <- base * altura
   perimetro <- 2 * (base + altura)
   diagonal <- RaizQ(Exp(altura, 2) + Exp(base, 2))

   escreval("Area: ", area:8:4)
   escreval("Perimêtro: ", perimetro:8:4)
   escreva("Diagonal: ", diagonal:8:4)

Fimalgoritmo