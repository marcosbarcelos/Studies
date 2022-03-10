/* O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de
uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.*/

const buttonCalcular = document.getElementById('btnCalcular');

function calcular() {
    //referencia os elementos HTML
    const inPreco = document.getElementById('inPreco');
    const inUso = document.getElementById('inUso');
    const outTotal = document.getElementById('outTotal');

    // obtém o valor dos campos de entrada HTML
    let preco = inPreco.value; 
    let uso = inUso.value;

    // calcula o uso dividido pelo tempo padrao(15min) e arrendoda para o maior valor inteiro mais próximo e multiplica pelo preço cobrado por 15min de uso.
    let total = Math.ceil(uso / 15) * preco;

    outTotal.textContent = 'Valor a Pagar R$: ' + total.toFixed(2);
}

buttonCalcular.addEventListener('click', calcular);