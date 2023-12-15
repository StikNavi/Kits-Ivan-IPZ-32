let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu__navigation');
let contacts = document.querySelector('.contacts');

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active_menu');
  menuBtn.classList.toggle('active_menu');
})

function filterItems(category) {
  var items = document.querySelectorAll('#itemList li');

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    
    if (category === 'all' || item.classList.contains(category)) {
      // item.style.display = 'list-item';
      item.classList.remove('hidden-card');
    } else {
      // item.style.display = 'none';
      item.classList.add('hidden-card');
    }
  }
}