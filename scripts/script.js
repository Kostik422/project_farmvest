const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header__content')

burger.addEventListener('click', function() {
  header.classList.toggle('active');
});

window.addEventListener('resize', function() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    header.classList.remove('active');
  }
});

const emailInput = document.querySelector('.input__input');
const inputLabel = document.querySelector('.input__label')

emailInput.addEventListener('input', function (){
  if (emailInput.value.trim() !== ''){
    inputLabel.classList.add('hidden');
  } else {
    inputLabel.classList.remove('hidden');
  }
});
