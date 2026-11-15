const speedDown = (velocity, callPrinter) => {
  for (velocity; velocity > 0; velocity -=20) {
    callPrinter(velocity);
    if(velocity == 10) {
      velocity = 0;
      callPrinter(velocity);
    }
  }
  console.log('A nave está parada e as comportas podem ser abertas');
}

const printer = velocity => console.log('Velocidade da nave: ' + velocity);
speedDown(150, printer);