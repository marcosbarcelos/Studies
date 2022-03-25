const btConfirmar = document.getElementById('btConfirmar');

function parquimetro() {
    //referencia elementos HTML
    const inValor = document.getElementById('inValor');
    const outTempo = document.getElementById('outTempo');
    const outTroco = document.getElementById('outTroco');
    //obtém valor do campo de entrada
    let valor = inValor.value;

    //verifica se o valor é diferente de empyt ou not a number
    if (valor == 0 || isNaN(valor)) {
        alert('Preencha o valor corretamente');
        inValor.focus();
        return
        //verifica se o valor corresponde ao minimo
    } else if (valor < 1.00) {
        alert('Valor Insuficiente (no mínimo, R$ 1.00)');
        inValor.focus();
        return
    }

    // declaração de variaveis para armazena valores das condicionais
    let tempo;
    let troco;

    //verifica o valor pago e indica o tempo e o troco
    if (valor >= 3.00) {
        tempo = 120
        troco = valor - 3.00;
    } else if (valor >= 1.75){
        tempo = 60
        troco = valor - 1.75;
    } else {
        tempo = 30
        troco = valor - 1.00;
    }

    outTempo.textContent = 'Tempo: ' + tempo + 'min';
    if (troco > 0) {
        outTroco.textContent = 'Troco: ' + troco.toFixed(2);
    }
}


btConfirmar.addEventListener('click', parquimetro);