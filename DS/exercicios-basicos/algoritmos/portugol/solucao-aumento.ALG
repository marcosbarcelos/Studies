Algoritmo "semnome"

Var
    salarioAtual, novoSalario, aumento, porcentagem : real


Inicio
    escreva("Digite seu salário atual: ")
    leia(salarioAtual)
    
    se (salarioAtual = 1000) entao
       porcentagem <- 0.20
    senao
       se (salarioAtual <= 3000) entao
          porcentagem <- 0.15
       senao
          se (salarioAtual <= 8000) entao
             porcentagem <- 0.10
          senao
               porcentagem <- 0.05
          Fimse
       Fimse
    Fimse
    
    aumento <- salarioAtual * porcentagem
    novoSalario <- salarioAtual + aumento
    porcentagem <- porcentagem * 100
    
    escreval("Novo Salario: R$", novoSalario:8:2)
    escreval("Aumento: R$", aumento:8:2)
    escreva("Porcentagem:", porcentagem:8:2, "%")
    
Fimalgoritmo