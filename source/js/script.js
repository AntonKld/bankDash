// Burger-menu
let navMenu = document.querySelector('.main__menu');
let navToggle = document.querySelector('.main__button');
let overlay = document.querySelector('.overlay'); // Затемняющий элемент

navMenu.classList.remove('main__menu--nojs');

navToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu); // Закрытие при клике на overlay

function toggleMenu() {
  const isClosed = navMenu.classList.contains('main__menu--closed');

  if (isClosed) {
    navMenu.classList.remove('main__menu--closed');
    navMenu.classList.add('main__menu--open');

    // Блокируем прокрутку только если ширина экрана меньше или равна 767
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.body.style.overflow = 'hidden'; // Блокируем прокрутку
    }
  } else {
    closeMenu();
  }
}

function closeMenu() {
  navMenu.classList.add('main__menu--closed');
  navMenu.classList.remove('main__menu--open');
  document.body.style.overflow = ''; // Восстанавливаем прокрутку
}

// Обработчик события изменения размера окна
window.addEventListener('resize', function () {
  if (window.innerWidth > 767) {
    closeMenu(); // Закрываем меню при увеличении ширины
  }
});

// Закрытие меню при клике вне его
document.addEventListener('click', function (event) {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnToggle = navToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    closeMenu();
  }
});

// profile
// Получаем все вкладки и их контент
const tabs = document.querySelectorAll('.profile__tab');
const contents = document.querySelectorAll('.tab-content');

// Перебираем все вкладки и добавляем обработчик события на клик
tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    // Убираем активный класс со всех вкладок
    tabs.forEach(tabItem => tabItem.classList.remove('active'));

    // Убираем класс активного контента у всех блоков контента
    contents.forEach(contentItem => contentItem.classList.remove('active-content'));

    // Добавляем активный класс к нажатой вкладке
    this.classList.add('active');

    // Показываем соответствующий контент, связанный с этой вкладкой
    const contentId = this.id.replace('tab', 'content');
    document.getElementById(contentId).classList.add('active-content');
  });
});
