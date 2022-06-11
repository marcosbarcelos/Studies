const buttonDropdown = document.getElementById('btn-dropdown');
const buttonMobile = document.getElementById('btn-mobile');


buttonDropdown.addEventListener('click', () => {
  const dropdown = document.getElementById('dropdown');
  const icon = document.getElementById('icon');

  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden');
    icon.classList.add('bi-chevron-up');
  } else {
    dropdown.classList.add('hidden');
    icon.classList.remove('bi-chevron-up');
  }
});

buttonMobile.addEventListener('click', () => {
  const container = document.getElementById('menu-container');

  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
  }
});
