const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    console.log('scroll')
    header.classList.remove('transparent');
    header.classList.add('solid');
  } else {
    header.classList.add('transparent');
    header.classList.remove('solid');
  }
})