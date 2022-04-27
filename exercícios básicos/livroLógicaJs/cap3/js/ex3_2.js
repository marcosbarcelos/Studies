const btCalcular = document.getElementById('btCalcular');
const btLimpar = document.getElementById('btLimpar');

function calcularPeso() {
    //referencia elementos html
    const inNome = document.getElementById('inNome');
    const rbMasculino = document.getElementById('rbMasculino');
    const rbFeminino = document.getElementById('rbFeminino');
    const inAltura = document.getElementById('inAltura');
    const outResposta = document.getElementById('outResposta');

    //obtém valor dos campos de entrada HTML
    let nome = inNome.value;
    let masculino = rbMasculino.value;
    let feminino = rbFeminino.value;
    let altura = inAltura.value;

    //verifica se os campos estão preenchidos
    if (nome == '' || (masculino == false && feminino == false)) {
        alert('Por favor, inforrme o nome e selecione o sexo');
        inNome.focus(); //posiciona o foco neste campo
        return
    }

    if (altura == 0 || isNaN(altura)) {
        alert('Por favor, informe a altura corretamente');
        inAltura.focus; //posiciona o foco neste campo
        return;
    }

    //verifica o sexo seleciona e indica a fórmula ideal
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2);
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }
    
    outResposta.textContent = nome + ': Seu peso ideal é ' + peso.toFixed(2) + ' kg';
}

//recarrega a página
function limparCampos() {
    location.reload();
}

//adiciona eventos ao click dos botões
btCalcular.addEventListener('click', calcularPeso);
btLimpar.addEventListener('click', limparCampos);