/* elaborar um programa que leia a descrição e o preço de um produto e retorne o valor onde 1 produto recebe o desconto de 50% */

const buttonCalcular = document.getElementById('btnCalcular');

function calcular() {
    const inProduto = document.getElementById('inProduto');
    const inPreco = document.getElementById('inPreco');
    const outTitulo = document.getElementById('outTitulo');
    const outPromocao = document.getElementById('outPromocao');

    let produto = inProduto.value;
    let preco = inPreco.value;

    let terceiroProduto = preco / 2;
    let promocao = (preco * 2) + terceiroProduto;

    outTitulo.textContent = produto + ' - ' + " Promoção: Leve 3 por R$: " + promocao.toFixed(2);
    outPromocao.textContent = 'O 3° produto custa apenas R$: ' + terceiroProduto.toFixed(2);
}

buttonCalcular.addEventListener('click', calcular)

