const senha = 2004;
let tentativa = Number(prompt('Digite a senha:'))

while (tentativa != senha) {
  tentativa = Number(prompt('Senha invalida! Tente Novamente:'));
}

alert('Acesso permitido')