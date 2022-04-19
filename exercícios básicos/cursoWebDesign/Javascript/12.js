var n = prompt('Digite um número');
n = parseInt(n);

//estrutura de repetição switch case - ideal para quando se tem mais de 3 escolhas baseado em variável
switch(n) {
  case 1:
  alert('Tente outra vez...')
  break
  case 2:
    alert('Tente outra vez...')
    break
  case 3:
    alert('Acertou, mizeravi...')
    break
  default:
    alert('digite um número de 1 a 3')
}