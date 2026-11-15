const preco = Number(prompt('Digite o preço unitário do produto:'));
const quantidade = Number(prompt('Digite a quantidade comprada:'));
const valorRecebido = Number(prompt('Digite o valor recebido:'));

const valorTotal = preco * quantidade;
const troco = valorRecebido - valorTotal;

if (valorRecebido < valorTotal) {
  const resto = valorTotal - valorRecebido;
  alert('DINHEIRO INSUFICIENTE. FALTAM ' + resto.toFixed(2))
} else {
  alert('Troco: ' + troco.toFixed(2)) 
}