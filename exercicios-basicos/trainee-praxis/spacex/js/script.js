const btnMobile = document.getElementById('btn-mobile');

function menuMobile() {
  const container = document.getElementById('container');
  
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden')
  }
}

btnMobile.addEventListener('click', menuMobile);