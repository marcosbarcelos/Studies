const target = document.querySelectorAll("[data-anime]");

function animeScroll() {
  const animationClass = "isvisible";
  //fórmula que obtém a altura atual da janela
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

  //obtém os elementos que contém o data-anime e a sua distância da janela
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    }
  });
}

if (target.length) {
  window.addEventListener("scroll", function () {
    animeScroll();
  });
}
