 const btPreencher = document.getElementById('btPreencher');
 
function preencherEstrelas() {
    //referencia elementos HTML
    const inNumero = document.getElementById('inNumero');
    const outEspacos = document.getElementById('outEspacos');
    
    //Obtém valor do campo de entrada
    const numero = Number(inNumero.value);

    //verifica se é diferente de empty ou not a number
    if (numero == 0 || isNaN(numero)) {
        alert('Insira um número válido!');
        inNumero.focus();
        return
    }

    //inicia variável do tipo string que irá armazenar o resultado
    let estrelas = '';


    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 1) {
            estrelas = estrelas + '*'
        } else {
            estrelas = estrelas + '-';
        }
    }

    //saida do resultado
    outEspacos.textContent = estrelas
}

 btPreencher.addEventListener('click', preencherEstrelas);