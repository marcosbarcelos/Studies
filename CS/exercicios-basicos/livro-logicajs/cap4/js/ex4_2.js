const btDecrescer = document.getElementById('btDecrescer');

function decrescer() {
    //referencia elementos html
    const inNumero = document.getElementById('inNumero');
    const outResposta = document.getElementById('outResposta');

    //obtém valor do campo de entrada
    const numero = Number(inNumero.value);

    //verifica se o valor é diferente de empty ou not a number
    if (numero == 0 || isNaN(numero)) {
        alert('Infor um valor válido');
        inNumero.focus();
        return;
    }

    let resposta = `Entre ${numero} e 1: ${numero}`;

    //i = varia de partida; enquanto condição true i > 0; i-1
    for (let i = numero - 1; i > 0; i--) {
        resposta = `${resposta}, ${i} `
    }
    //adiciona o ponto ao final do resultado
    resposta = `${resposta}.`
    outResposta.textContent = resposta
}

btDecrescer.addEventListener('click', decrescer);