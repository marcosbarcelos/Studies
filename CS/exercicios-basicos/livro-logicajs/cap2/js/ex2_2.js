const btnConverter = document.getElementById('btnConverter');

function conversao() {
    // cria referências com os elementos HTML
    const inTitulo = document.getElementById('inTitulo');
    const inDuracao = document.getElementById('inDuracao');
    const outTitulo = document.getElementById('outTitulo');
    const outDuracao = document.getElementById('outConversao');

    // obtém conteúdos dos campos de entrada
    let tituloFilme = inTitulo.value;
    let duracaoFilme = inDuracao.value;

    // retorna apenas a parte inteira do resultado da divisão
    let horas = Math.floor(duracaoFilme / 60);
    // obtém o resto da divisão entre os numeros
    let minutos = duracaoFilme % 60;
    // altera o conteúdo de texto dos elementos de saida HTML
    outTitulo.textContent = tituloFilme;
    outDuracao.textContent = horas + 'hora(s) e ' + minutos + 'minuto(s)';
}

btnConverter.addEventListener('click', conversao);