Algoritmo ""
//Fazer um programa para ler as medidas da base e altura de um ret�ngulo. Em seguida, mostrar o valor
//da �rea, per�metro e diagonal deste ret�ngulo, com quatro casas decimais, conforme exemplos.

Var
   base, altura, area, perimetro, diagonal : real


Inicio
   escreva("Digite a base do ret�ngulo:")
   leia(base)
   escreva("Digite a altura do ret�ngulo:")
   leia(altura)
   
   area <- base * altura
   perimetro <- 2 * (base + altura)
   diagonal <- RaizQ(Exp(altura, 2) + Exp(base, 2))

   escreval("Area: ", area:8:4)
   escreval("Perim�tro: ", perimetro:8:4)
   escreva("Diagonal: ", diagonal:8:4)

Fimalgoritmo