let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu__navigation');
let contacts = document.querySelector('.contacts');

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active_menu');
  menuBtn.classList.toggle('active_menu');
})