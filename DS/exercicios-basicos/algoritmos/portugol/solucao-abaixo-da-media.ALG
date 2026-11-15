Algoritmo "semnome"

Var
   n, i : inteiro
   V : vetor [0..10] de real
   media : real


Inicio
      escreva("Quantos elementos vai ter o vetor? ")
      leia(n)
      
      media <- 0
      para i de 0 ate n-1 faca
           escreva("Digite um número: ")
           leia(V[i])
           media <- media + V[i]
      fimpara
      
      media <- media / n
      escrevaL("MEDIA DO VETOR = ", media:6:3)
      
      escrevaL("ELEMENTOS ABAIXO DA MEDIA: ")
      para i de 0 ate n-1 faca
           se V[i] < media entao
              escreval(V[i]:2:1)
           fimse
      fimpara
Fimalgoritmo