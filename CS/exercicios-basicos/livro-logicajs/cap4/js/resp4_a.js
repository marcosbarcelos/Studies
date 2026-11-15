const btRepetir = document.getElementById('btRepetir');

function repeteFruta() {
    const inFruta = document.getElementById('inFruta');
    const inNumero = document.getElementById('inNumero');
    const outResposta = document.getElementById('outResposta');

    const fruta = inFruta.value;
    const numero = Number(inNumero.value);
    
    if (fruta == '' || numero == 0 || isNaN(numero)) {
        alert('Preencha os campos corretamente!');
        inFruta.focus();
        return;
    }

    let resposta = '';

    for (let i = 1; i < numero; i++) {
        resposta = resposta + fruta + ' * ';
    }
    resposta = resposta + fruta;
    outResposta.textContent = resposta
}

btRepetir.addEventListener('click', repeteFruta);