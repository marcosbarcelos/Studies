const buttonCalcular = document.getElementById('btnCalcular');

function CalcularPreco() {
    //referencia elementos HTML
   const inQuilo = document.getElementById('inQuilo');
   const inConsumo = document.getElementById('inConsumo');
   const outTotal = document.getElementById('outTotal');
    //obtém os valores dos campos de entrada
   let precoQuilo = inQuilo.value;
   let consumo = inConsumo.value;
    //converte grama em kilo e calcular o valor total
   let valorTotal = (consumo / 1000) * precoQuilo; 

   outTotal.textContent = "Valor a pagar R$: " + valorTotal;
}
buttonCalcular.addEventListener('click', CalcularPreco);