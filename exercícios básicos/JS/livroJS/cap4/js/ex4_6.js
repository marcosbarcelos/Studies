const btVerificarPrimo = document.getElementById('btVerificarPrimo');

function verificaPrimo() {
    const inNumero = document.getElementById('inNumero');
    const outResposta = document.getElementById('outResposta');

    let num = Number(inNumero.value);

    if (num == 0 || isNaN(num)) {
        alert('Preencha os campos corretamente');
        inNumero.focus();
        return
    }

    let temDivisor = 0;

    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            temDivisor = 1;
            break
        }
    }

    if (num > 1 && !temDivisor) {
        outResposta.textContent = `${num} é primo`;
    } else {
        outResposta.textContent = `${num} não é primo`;
    }
}

btVerificarPrimo.addEventListener('click', verificaPrimo);