// declara uma função(conjunto de instruções) mostrarOla
function mostrarOla() {
    // .value obtém o valor inserido no campo HTML
    let nome = document.getElementById('nome').value;
    // .textContent permite obter e alterar o conteúdo do texto de um elemento HTML
    document.getElementById('resposta').textContent = 'olá ' + nome;
}

// objeto document conversa com os elementos HTML
const btnMostrar = document.getElementById('button');
// modelo de evento DOM nível 2, adiciona um "ouvinte" ao elemento, que executa uma ação.
btnMostrar.addEventListener('click', mostrarOla);
                                                                   