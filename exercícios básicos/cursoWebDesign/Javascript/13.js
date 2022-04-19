var numero = parseFloat(prompt('Digite um número'))
var i = 1;

// laço for - indicado para quando sabemos o numero de vezes que iremos passar pelo laço
for (var indice = 1; indice<=100; indice++) {
  document.write(numero + ' x ' + indice + ' = ' + (numero * indice) + ' <br> ')

  if (indice % 10 === 0) {
    document.write('<hr>')
  }
}


//laço while - indicado quando não sabemos quanto iterar
while (i <= 100) {
  document.write(numero + ' x ' + i + ' = ' + (numero * i) + ' <br> ')
  if (i % 10 === 0) {
    document.write('<hr>');
  }  
  i++
}

//laço do while - nos garante que o laço será executado pelo menos uma vez
do {
  document.write(numero + ' x ' + i + ' = ' + (numero * i) + ' <br> ')
  if (i % 10 === 0) {
    document.write('<hr>');
  }  
  i++
} while (i<=100)