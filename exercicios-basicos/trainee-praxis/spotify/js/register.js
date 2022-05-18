const inEmail = document.getElementById('inEmail');
const inPassword = document.getElementById('inPassword');
const inPhone = document.getElementById('inPhone');
const inCPF = document.getElementById('inCPF');
const buttonRegister = document.getElementById('buttonRegister');

inPhone.addEventListener('keypress', () => {
  const phoneLength = inPhone.value.length;

  switch (phoneLength) {
    case 0:
      inPhone.value += '(';
      break;
    case 3:
      inPhone.value += ') ';
      break;
    case 6:
      inPhone.value += ' ';
      break;
    case 11:
      inPhone.value += '-';
      break;
  }
});

inCPF.addEventListener('keypress', () => {
  const CPFLength = inCPF.value.length;

  if (CPFLength == 3 || CPFLength == 7) {
    inCPF.value += '.';
  } else if (CPFLength == 11) {
    inCPF.value += '-';
  }
});

function validate() {
  if (inEmail.value == '' || inPassword.value == '' || inPhone.value == '' || inCPF.value == '') {
    alert('Preencha os campos corretamente!');
    inEmail.focus;
  } else {
    localStorage.setItem('email', inEmail.value)
    localStorage.setItem('telefone', inPhone.value)
    localStorage.setItem('CPF', inCPF.value)
    alert('Dados Cadastrado, seu premium será ativado em até 24 horas.')
  }
}
buttonRegister.addEventListener('click', validate)

