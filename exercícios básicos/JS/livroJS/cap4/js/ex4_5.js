const btRegistrar = document.getElementById('btRegistrar');
var numContas = 0;
var valorTotal = 0;
var resposta = '';

function registrarConta() {
    const inDescricao = document.getElementById('inDescricao');
    const inValor = document.getElementById('inValor');
    const outListaContas = document.getElementById('outListaContas');
    const outTotal = document.getElementById('outTotal');


    let descricao = inDescricao.value;
    let valor = Number(inValor.value);

    if (descricao == '' || valor == 0 || isNaN(valor)) {
        alert('Informe os dados corretamente...');
        inDescricao.focus();
        return
    }

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