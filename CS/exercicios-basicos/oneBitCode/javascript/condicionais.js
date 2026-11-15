const velocity = 20;

//if simples
if (velocity > 10) {
  console.log(true);
}

//if..else
if (velocity > 20) {
  console.log(true);  
} else {
  console.log(false);
}

//encandeamento de if
if (velocity > 20) {
  console.log('É menor que 20');
} else if (velocity >= 10) {
  console.log('É maior que 10');
} else {
  console.log('É menor que 10');
}

//if ternario
velocity >= 15 ? console.log('maior que 15') : console.log('menor que 15')