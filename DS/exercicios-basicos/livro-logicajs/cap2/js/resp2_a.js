/* Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia descrição e preço de um
medicamento. Informe o valor do produto na promoção. */

const buttonCalcular = document.getElementById('btnCalcular');

function calcular() {
    //referencia elementos HTML
    const inMedicamento = document.getElementById('inMedicamento');
    const inPreco = document.getElementById('inPreco');
    const outTitulo = document.getElementById('outTitulo');
    const outPromocao = document.getElementById('outPromocao');

    //obtém valor dos campos de entrada HTML
    let medicamento = inMedicamento.value;
    let preco = inPreco.value;

    //
    let precoPromo = Math.floor(preco * 2);

    outTitulo.textContent = 'Promoção de ' + medicamento;
    outPromocao.textContent = 'Leve 2 por apenas R$: ' + precoPromo.toFixed(2);
}

buttonCalcular.addEventListener('click', calcular);