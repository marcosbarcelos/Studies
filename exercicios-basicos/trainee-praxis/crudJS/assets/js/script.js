function initModal(modalID) {
  const modal = document.getElementById(modalID);
  //verifica se o modal existe
  if (modal) {
    modal.classList.add('visible');
    //adiciona um evento de click com o evento do navegador de paramêtro
    modal.addEventListener('click', (e) => {
      //obtém e compara se o alvo de click é comparado ao local de fechar
      if (e.target.id == modalID || e.target.id == 'buttonCloseModal') {
        modal.classList.remove('visible');
      }
    });
  }
}
const buttonCreate = document.getElementById('buttonCreate');
buttonCreate.addEventListener('click', () => initModal('modalRegister'));

//adicionar mascara no cpf
let inName = document.getElementById('inName');
let inEmail = document.getElementById('inEmail');
let inPhone = document.getElementById('inPhone');
let inCPF = document.getElementById('inCPF');
inCPF.addEventListener('keypress', () => {
  let CPFLength = inCPF.value.length;

  if (CPFLength == 3 || CPFLength == 7) {
    inCPF.value += '.';
  } else if (CPFLength == 11) {
    inCPF.value += '-';
  }
});

function addToTable() {
  const name = inName.value;
  const email = inEmail.value;
  const phone = inPhone.value;
  const CPF = inCPF.value;
  const table = document.getElementById('infoTable');

  if (name != '' && email != '' && phone != '' && CPF != '') {
    let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    row.id = tableSize; //Adicionando o id no elemento a ser criado

    let buttonR = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";
    let buttonE = "<button class='edit-btn' onclick='editToTable(this)'>Editar</button>";

    //Preenchendo as celulas da linha
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
    cell4.innerHTML = CPF;
    cell5.innerHTML = buttonR;
    cell6.innerHTML = buttonE;

    //Limpando os campos de inserção de dados
    document.getElementById('inName').value = '';
    document.getElementById('inEmail').value = '';
    document.getElementById('inPhone').value = '';
    document.getElementById('inCPF').value = '';
  } else {
    alert('Digite os dados corretamente!');
  }
}
const buttonRegister = document.getElementById('buttonRegister');
buttonRegister.addEventListener('click', addToTable);

function removeToTable(id) {
  let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
  row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
  row.parentNode.removeChild(row); //Removendo a linha
}

function editToTable(id) {
  initModal('modalRegister')
  buttonRegister.disabled = true
  buttonEdit.disabled = false
}
