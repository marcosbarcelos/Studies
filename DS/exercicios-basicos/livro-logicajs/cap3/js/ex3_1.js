const btResultado = document.getElementById('btResultado');

function calculaMedia() {
    const inNome = document.getElementById('inNome');
    const inNota1 = document.getElementById('inNota1');
    const inNota2 = document.getElementById('inNota2');
    const outMedia = document.getElementById('outMedia');
    const outSituacao = document.getElementById('outSituacao');

    let nome = inNome.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);

    let media = (nota1 + nota2) / 2;
    outMedia.textContent = 'Média das Notas: ' + media.toFixed(1);

    if (media >= 7)  {
        outSituacao.textContent = 'Parabéns ' + nome + '! Você foi aprovado(a).'; 
        outSituacao.style.color = 'green';
    } else if (media >= 4) {
        outSituacao.textContent = 'Atenção ' + nome + '. Você está em recuperação.'; 
        outSituacao.style.color = 'yellow';
    } else {
        outSituacao.textContent = 'Ops ' + nome + '... Você foi reprovado(a).';
        outSituacao.style.color = 'red';
    }
}

btResultado.addEventListener('click', calculaMedia);