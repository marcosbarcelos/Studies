const btMostrar = document.getElementById('btMostrar'); 


    function cacularEvolucao() {
        //referencia elementos HTML
        const inChin = document.getElementById('inChin');
        const inAnos = document.getElementById('inAnos');
        const outEvolucao = document.getElementById('outEvolucao');

        //obtém dados dos campos de entrada
        const chinchilas = Number(inChin.value);
        const anos = Number(inAnos.value);

        //valida 
        if (chinchilas < 2 || isNaN(chinchilas) || anos == 0 || isNaN(anos)) {
            alert('Preencha os campos corretamente! min de chinchilas = 2');
            inChin.focus();
            return
        }

        let resultado = ''
        let total = chinchilas;

        for (let i = 1; i <= anos; i++) {
            resultado = resultado + i + '° Ano: ' + total + ' Chinchilas ' + '\n';
            total = total * 3;
        }

        outEvolucao.textContent = resultado;
    }

    btMostrar.addEventListener('click', cacularEvolucao);