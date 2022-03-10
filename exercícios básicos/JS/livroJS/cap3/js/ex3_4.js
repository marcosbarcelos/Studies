const btExibir = document.getElementById('btExibir');

function calcularFuso() {
    //referencia elementos html
    const inHoraBrasil = document.getElementById('inHoraBrasil');
    const outHoraFranca = document.getElementById('outHoraFranca');
    
    //obtém valor do campo de entrada
    const horaBrasil = Number(inHoraBrasil.value);

    //verifica se os campos estão preenchidos de maneira correta
    if (inHoraBrasil.value == '' || isNaN(horaBrasil)) {
        alert('Informe a hora no Brasil corretamente');
        inHoraBrasil.focus();
        return
    } 

    //calcula o fuso de +5 daa frança
    let horaFranca = horaBrasil + 5;

    //A.M
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }

    outHoraFranca.textContent = 'Hora na França: ' + horaFranca.toFixed(2);
}

btExibir.addEventListener('click', calcularFuso);