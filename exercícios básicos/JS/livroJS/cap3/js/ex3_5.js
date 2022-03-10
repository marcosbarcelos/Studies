const btExibir = document.getElementById('btExibir');

function calcularRaiz() {
    //referencia elementos HTML
    const inNumero = document.getElementById('inNumero');
    const outResposta = document.getElementById('outResposta');

    //obtém valor do campo de entrada HTML
    let numero = inNumero.value;

    //calcula a raiz do número
    const raizNum = Math.sqrt(numero);

    //informa a raiz caso ela seja um valor exato
    if (raizNum == Math.floor(raizNum)) {
        outResposta.textContent = 'Raiz: ' + raizNum;
    } else {
        alert('Não há raiz exata para este número');
        inNumero.focus();
        return
    }
}

btExibir.addEventListener('click', calcularRaiz);