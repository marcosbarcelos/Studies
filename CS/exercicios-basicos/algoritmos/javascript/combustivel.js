let codigo;
let diesel = 0;
let alcool = 0;
let gasolina = 0;

codigo = Number(prompt('Informe um codigo (1, 2, 3) ou 4 para parar:'));
while (codigo != 4) {
  switch (codigo) {
    case 1:
      alcool += 1;
      break;
    case 2:
      gasolina += 1;
      break;
    case 3:
      diesel += 1;
  }
  codigo = Number(prompt('Informe um codigo (1, 2, 3) ou 4 para parar:'));
}

alert('MUITO OBRIGADO!');
alert('Alcool: ' + alcool + '\nGasolina: ' + gasolina + '\nDiesel: ' + diesel);
