// declaração de variáveis
let inName = document.getElementById('inName');
let inEmail = document.getElementById('inEmail');
let inPhone = document.getElementById('inPhone');
let inCPF = document.getElementById('inCPF');
let inTable = document.getElementById('infoTable');

//inicia modal de cadastro
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

//Apresenta / recolhe a tabela
const buttonTable = document.getElementById('buttonTable');
buttonTable.addEventListener('click', () => {
  const infoTable = inTable;

  if (infoTable.classList.contains('hidden')) {
    buttonTable.value = 'Esconder Tabela';
    infoTable.classList.remove('hidden');
  } else {
    buttonTable.value = 'Mostrar Tabela';
    infoTable.classList.add('hidden');
  }
});

//adiciona mascara no telefone
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

// adiciona mascara no CPF
inCPF.addEventListener('keypress', () => {
  const CPFLength = inCPF.value.length;

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
  const table = inTable;

  if (name != '' && email != '' && phone != '' && CPF != '') {
    //Calcula o tamanho da Tabela
    let tableSize = table.rows.length;
    //Insere uma linha abaixo da Tabela
    let row = table.insertRow(tableSize);
    //Insere as celulas da linha
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    //Adicionando o id no elemento criado
    row.id = tableSize;

    //armazena dados na memória do navegador(aqui tem um bug kkkkk)
    for (let i = 0; i < tableSize; i++) {
      localStorage.setItem(`Nome Cliente ${i + 1}`, name);
      localStorage.setItem(`Email Cliente ${i + 1}`, email);
      localStorage.setItem(`Telefone Cliente ${i + 1}`, phone);
      localStorage.setItem(`CPF Cliente ${i + 1}`, CPF);
    }

    //cria os botões de opções
    let buttonR = "<button class='table__button --remove' onclick='removeToTable(this)'>Remover</button>";
    let buttonE = "<button class='table__button --edit' onclick='editToTable(this)'>Editar</button>";

    //Preenche as celulas
    cell1.textContent = name;
    cell2.textContent = email;
    cell3.textContent = phone;
    cell4.textContent = CPF;
    cell5.innerHTML = buttonE;
    cell5.innerHTML += buttonR;

    //Limpa os campos
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
  //Pega o id do avô do botão
  let row = id.parentNode.parentNode.id;
  //Recebe o elemento da linha pelo ID
  row = document.getElementById(row);
  //Remove a linha
  row.parentNode.removeChild(row);

  //remove dados da memória do navegador(aqui tbm tem um bug KKKKKKKKK)
  const tableSize = inTable.rows.length;
  for (let i = 0; i < tableSize; i++) {
    localStorage.removeItem(`Nome Cliente ${i + 1}`);
    localStorage.removeItem(`Email Cliente ${i + 1}`);
    localStorage.removeItem(`Telefone Cliente ${i + 1}`);
    localStorage.removeItem(`CPF Cliente ${i + 1}`);
  }
}

//funcionalidade duvidosa, mas é como eu digo... se tá funcionando, deixa e reza para que o usuário não seja burro!
function editToTable(id) {
  initModal('modalRegister');
  removeToTable(id)
}
