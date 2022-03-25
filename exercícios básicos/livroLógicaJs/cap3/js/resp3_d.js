const btVerificar = document.getElementById('btVerificar');

function ladosTriangulo() {
    const inLadoA = document.getElementById('inLadoA');
    const inLadoB = document.getElementById('inLadoB');
    const inLadoC = document.getElementById('inLadoC');
    const outSimNao = document.getElementById('outSimNao');
    const outTipo = document.getElementById('outTipo');

    const ladoA = Number(inLadoA.value);
    const ladoB = Number(inLadoB.value);
    const ladoC = Number(inLadoC.value);
    let tipo;

    if (ladoA == 0 || ladoB == 0 || ladoC == 0) {
        alert('Preencha os campos corretamente!');
        inLadoA.focus();
        return;
    }

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        alert('Não é possível formar um Triângulo com os valores informados.');
        inLadoA.value = '';
        inLadoB.value = '';
        inLadoC.value = '';
        inLadoA.focus();
        outSimNao.textContent = '';
        outTipo.textContent = '';
        return;
    } else {
        switch(true) {
            case ladoA == ladoB && ladoA == ladoC:
                tipo = 'Equilátero';
                break
            case ladoA == ladoB || ladoA == ladoC || ladoB == ladoC:
                tipo = 'Isósceles';
                break
            default:
                tipo = 'Escaleno';
        }

        outSimNao.textContent = 'Lados podem Formar um triângulo';
        outTipo.textContent = 'Tipo: ' + tipo;
    }
}

btVerificar.addEventListener('click', ladosTriangulo);