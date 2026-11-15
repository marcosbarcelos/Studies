Algoritmo "semnome"

Var
   senha, tentativa : inteiro
Inicio
      senha <- 2002
      
      escreva("Digite sua senha")
      leia(tentativa)
      
      enquanto tentativa <> senha faca
               escreva("Senha Invalida! Tente Novamente: ")
               leia(tentativa)
      fimenquanto
      
      escreva("Acesso Permitido!")
Fimalgoritmo