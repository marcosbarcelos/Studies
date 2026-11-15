const btMostrar = document.getElementById('btMostrar');

function tabuada() {
    //cria referencia com elementos HTML
    const inNumero = document.getElementById('inNumero');
    const outTabuada = document.getElementById('outTabuada');
    //obtém valor do campo de entrada HTML
    const numero = Number(inNumero.value);
    //valida se o número é diferente de empty ou not a number
    if (numero == 0 || isNaN(numero)) {
        alert('Informe um número válido');
        inNumero.focus(); //direciona o foco ao campo de entrada
        return
    }

    let resposta = '';

    //laço de repetição para obter tabuada: iniciar i = 0, verifica se i é <= que 10, caso true i +1.
    for (let i = 0; i <= 10; i++) {
        //resposta = resposta + numero + ' x ' + i + ' = ' + numero * i + '\n';
        resposta = `${resposta} ${numero} x ${i} = ${numero * i} \n`
    } 

    outTabuada.textContent = resposta;
}

btMostrar.addEventListener('click', tabuada);