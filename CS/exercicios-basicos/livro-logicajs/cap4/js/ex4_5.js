const btRegistrar = document.getElementById('btRegistrar');
//inicia variáveis globais para não existir perca de dados
var numContas = 0;
var valorTotal = 0;
var resposta = '';

function registrarConta() {
    //referencia elementos html
    const inDescricao = document.getElementById('inDescricao');
    const inValor = document.getElementById('inValor');
    const outListaContas = document.getElementById('outListaContas');
    const outTotal = document.getElementById('outTotal');

    //obtém valores dos campos de entrada
    let descricao = inDescricao.value;
    let valor = Number(inValor.value);
    //verifica se os campos estão preenchidos corretamente
    if (descricao == '' || valor == 0 || isNaN(valor)) {
        alert('Informe os dados corretamente...');
        inDescricao.focus();
        return
    }

    //caso passe na validação, adiciona uma conta e o valor novo ao total
    numContas++;
    valorTotal = valorTotal + valor;

    resposta = `${resposta} ${descricao} - R$: ${valor.toFixed(2)} \n`

    outListaContas.textContent = `${resposta} -----------------------------------`
    outTotal.textContent = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`

    inDescricao.value = '';
    inValor.value = '';
    inDescricao.focus();
}

btRegistrar.addEventListener('click', registrarConta);