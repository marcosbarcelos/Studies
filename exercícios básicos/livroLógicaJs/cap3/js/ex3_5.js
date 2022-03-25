const btExibir = document.getElementById('btExibir');

function calcularRaiz() {
    //referencia elementos HTML
    const inNumero = document.getElementById('inNumero');
    const outResposta = document.getElementById('outResposta');

    //obtém valor do campo de entrada HTML
    let numero = inNumero.value;

    //caso valor seja empty ou not a number, reinicia a execução.
    if (numero == 0 || isNaN(numero)) {
        alert('Preencha o campo corretamente');
        inNumero.focus();
        return
    }

    //calcula a raiz do número
    const raizNum = Math.sqrt(numero);

    //informa a raiz caso ela seja um valor exato, caso não... alerta e reinicia o programa
    if (raizNum == Math.floor(raizNum)) {
        outResposta.textContent = 'Raiz: ' + raizNum;
    } else {
        alert('Não há raiz exata para este número');
        inNumero.focus();
        return
    }
}

btExibir.addEventListener('click', calcularRaiz);