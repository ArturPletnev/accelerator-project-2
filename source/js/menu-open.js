const toggleButtonElement = document.querySelector('.header__toggle');
const menuElement = document.querySelector('.header__navigation-list');

const menuToggle = () => {
  toggleButtonElement.addEventListener('click', () => {
    toggleButtonElement.classList.toggle('header__toggle--open');
    menuElement.classList.toggle('header__navigation-list--open');
  });
};

export { menuToggle };
