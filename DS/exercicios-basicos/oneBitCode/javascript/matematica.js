 // funções matemáticas básicas
// retorna o valor absoluto de um número, caso negativo ele transforma em positivo
Match.abs(-3) // 3

// arredonda o valor para cima, caso decimal retorna o numero inteiro mais próximo 
Match.ceil(4.2) //5

// arredonda o valor para baixo, caso decimal retorna apenas a parte inteira do num base
Math.floor(7.9) //7

// retorna a base(num1) elevada ao expoente(num2)
Math.pow(3, 2) // 9

// retorna um número aleatório entre 0 e 1, com várias casas decimais
Math.random() // 0...

//arredonda para o valor inteiro mais próximo (caso < .5 para baixo) (caso >.4 para cima)
Math.round(2.7) //3

// retorna a raiz quadrada do numero
Math.sqrt(16) //4

/* ao montar expressões matemáticas devemos ter cuidado, por conta da ordem hierárquica:
    1. os parenteses redefinem a ordem das prioridades e podem ser utilizado vários conjuntos ex: 10 * (6-4) o que está no parentese é executado primeiro
    2. as funções matemáticas ou criadas pelo usuário têm prioridade sobre os demais operadorres aritméticos ex: Math.sqrt(9) * 8 / 2 a função é feita primeiro
    3. os operadores de multiplicação, dvisão e módulo têm prioridade sobre o de adição e subtração ex: 2 + 5 * 2 a multiplica é feita primeiro
    4. caso a expressão possua operadores de mesmo nível de hierarquia, o resultado é calculado da direta para a esquerda ex: 5 / 2 * 3 começa pela esquerda */
