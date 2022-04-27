const btVerificar = document.getElementById('btVerificar');

function verificaMulta() {
    //referencia elementos HTML
    const inVelPermitida = document.getElementById('inVelPermitida');
    const inVelCondutor = document.getElementById('inVelCondutor');
    const outSituacao = document.getElementById('outSituacao');

    //obtém valores dos campos de entrada
    let velLimite = inVelPermitida.value;
    let velMomento = inVelCondutor.value;
    
    //verifica se o valor informado é diferente de empty
    if (velLimite == 0 || velMomento == 0) {
        alert('Preencha os campos corretamente');
        inVelPermitida.focus();
        return;            
        }
    

    let situacao;

    //compara a condição com o parâmero(true), caso true ela será correspondida.
    switch (true) {
        case velMomento <= velLimite:
            situacao = 'Sem Multa';
            break
        case velMomento <= velLimite * 1.2:
            situacao = 'Multa Leve';
            break
        case velMomento > velLimite * 1.2:
            situacao = 'Multa Grave';
            break
        }

        outSituacao.textContent = 'Situação: ' + situacao;
    } 

btVerificar.addEventListener('click', verificaMulta);