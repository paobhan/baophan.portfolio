const header = document.querySelector('.header');

function transparentHeader() {
  if (window.scrollY > 10) {
      header.classList.remove('transparent');
      header.classList.add('solid');
    } else {
      header.classList.add('transparent');
      header.classList.remove('solid');
    }
}

transparentHeader();

window.addEventListener('scroll', () => {
  transparentHeader();
})
