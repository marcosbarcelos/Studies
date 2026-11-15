const buttonCalcular = document.getElementById('btnCalcular');

function financiamento() {
    // referencia os elementos HTML
    const inVeiculo = document.getElementById('inVeiculo');
    const inPreco = document.getElementById('inPreco');
    const outVeiculo = document.getElementById('outVeiculo');
    const outEntrada = document.getElementById('outEntrada');
    const outParcela = document.getElementById('outParcela');

    //obtém os valores dos campos de entrada HTML
    let modeloVeiculo = inVeiculo.value;
    let precoVeiculo = inPreco.value;

    //calcula o valor da entrada e das parcelas
    let entrada = precoVeiculo * 0.5;
    let parcela = (precoVeiculo * 0.5) / 12;

    //altera o conteúdo dos elementos HTML
    outVeiculo.textContent = modeloVeiculo;
    outEntrada.textContent = 'Entrada de R$: ' + entrada;
    outParcela.textContent = '+12x de R$: ' + parcela.toFixed(3);
}

buttonCalcular.addEventListener('click', financiamento)