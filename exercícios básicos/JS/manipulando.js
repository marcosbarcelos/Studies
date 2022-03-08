                        //conceitos
//comentários

// comentário de linha - antecedido por duas barras
/* comentário de bloco (várias linhas), só se encerra após o */

//termos

// objeto: representa uma instância de uma classe
//método: representa uma instrução ou um conjunto de instruções que executam uma tarefa
// propriedade: representa uma característica (atributo) de um objeto
//função: conjunto de comandos que realizam uma ação
//variável:nos permitem gravar dados na memória


                        //var, const e let
// declaração

var preco = 2; // declara uma váriavel, pode ser declarada e atualizada novamente
var desconto = 0.2;

preco = preco - desconto; // agora a variavél preço irá equivaler a "2 - 0.2"

const preco2 = 2; // declara uma constante, valor imutével 
var desconto2 = 0.2;

preco2 = preco2 - desconto2; // isso não é possível
var total = preco2 - desconto2; // para que funcione teria que fazer algo deste tipo

let preco3 = 2;  //declara uma variavel let, não pode ser redeclarada mas pode ser atualizada
var desconto3 = 0.2;

/* let preco3 = 3;  isso dará erro "identificador já declarado", pois é impossivel redeclarar uma let */
preco3 = 5; // isso sim é valido, pois estará apenas atualizando

//escopo

// podem ser acessadas em toda a janela
var global = "eu sou umaa variavél global"; 
const global2 = "eu sou uma variavél global";
let global3 = "eu sou uma variavél global"; 

function newFunction() {
    // não podemos acessar essas variavéis fora desta função
    var escopoDeFuncação = "eu sou uma váriavel de função"; 
    const escopoDeFuncação2 = "eu sou uma váriavel de função";
    let escopoDeFuncação3 = "eu sou uma váriavel de função";
    let times = 4;

    if (times > 3) {
        let hello = "say hello" /* essa é uma variavel de bloco não pode ser acessada fora desses "{}" e só pode ser declarada por meio de let */
    
        console.log(hello) // dirá "say hello"
    }
    console.log(hello) // isso dará um erro "hello não está definido"
}

                        //funções
//declaração
function nome (parâmentros) { // a função também pode ser criada sem parâmetros
    //conteúdo
    return ação; // serve para obter o resultado da função, bom para quando necessita manipular depois
}

nome(parâmentros = 1); //invoca a função

//exemplo
function soma (a, b) {
    return a + b; // retorna 8
}

soma(3, 5);


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

//arredonda para o valorr inteiro mais próximo (caso < .5 para baixo) (caso >.4 para cima)
Math.round(2.7) //3

// retorna a raiz quadrada do numero
Math.sqrt(16) //4

/* ao montar expressões matemáticas devemos ter cuidado, por conta da ordem hierárquica:
    1. os parenteses redefinem a ordem das prioridades e podem ser utilizado vários conjuntos ex: 10 * (6-4) o que está no parentese é executado primeiro

    2. as funções matemáticas ou criadas pelo usuário têm prioridade sobre os demais operadorres aritméticos ex: Math.sqrt(9) * 8 / 2 a função é feita primeiro

    3. os operadores de multiplicação, dvisão e módulo têm prioridade sobre o de adição e subtração ex: 2 + 5 * 2 a multiplica é feita primeiro

    4. caso a expressão possua operadores de mesmo nível de hierarquia, o resultado é calculado da direta para a esquerda ex: 5 / 2 * 3 começa pela esquerda */