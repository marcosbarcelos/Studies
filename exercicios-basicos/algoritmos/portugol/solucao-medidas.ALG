Algoritmo "semnome"
//Fazer um programa para ler tr�s medidas A, B e C. Em seguida, calcular e mostrar (imprimir os dados
//com quatro casas decimais):



Var

   a, b, c, areaA, areaB, areaC : real

Inicio
   escreva("Digite a medida A:")
   leia(a)
   escreva("Digite a medida B:")
   leia(b)
   escreva("Digite a medida C:")
   leia(c)
   
   //�rea do quadrado que tem lado A
   areaA <- Exp(a, 2)
   // �rea do tri�ngulo ret�ngulo que base A e altura B
   areaB <- (b * a) / 2
   //�rea do trap�zio que tem bases A e B, e altura C
   areaC <- (a + b) * c / 2
   
   escreval("AREA DO QUADRADO: = ", areaA:8:4)
   escreval("AREA DO TRI�NGULO: = ", areaB:8:4)
   escreva("AREA DO TRAPEZIO: = ", areaC:8:4)

Fimalgoritmo