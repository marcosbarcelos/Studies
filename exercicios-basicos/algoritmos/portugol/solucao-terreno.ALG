Algoritmo "semnome"
// Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma
//casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida,
//o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com
//duas casas decimais.
Var

   largura, comprimento, metroQuadrado, area, preco : real
   
Inicio
   escreva("Digite a Largura do Terreno:")
   leia(largura)
   escreva("Digite o Comprimento do Terreno:")
   leia(comprimento)
   escreva("Digite o Valor do Metro Quadrado:")
   leia(metroQuadrado)

   area <- largura * comprimento
   escreval("A área do terreno é ", area:8:2)
   preco <- area * metroQuadrado
   escreva("O preço do terreno é ", preco:8:2)
Fimalgoritmo