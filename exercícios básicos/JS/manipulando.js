// comentário de linha - antecedido por duas barras
/* comentário de bloco (várias linhas), só se encerra após o */


                        //var, const e let
// declaração

var preco = 2; // declara uma váriavel, pode ser declarada e atualizada novamente
var desconto = 0.2;

preco = preco - desconto; // agora a variavél preço irá equivaler a "2 - 0.2"

const preco2 = 2; // declara uma constante, valor imutével 
var desconto2 = 0.2;

preco2 = preco2 - desconto2; // isso não é possível
var total = preco2 - desconto2; // para que funcione teria que fazer algo deste tipo

let preco3 = 2; // declara uma variavel let, não pode ser redeclarada mas pode ser atualizada
var desconto3 = 0.2;

let preco3 = 3; // isso dará erro "identificador já declarado", pois é impossivel redeclarar uma let 
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
