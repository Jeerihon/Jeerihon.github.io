(function () {
  const btn = document.getElementById('js_menuBtn');
  const menu = document.getElementById('js_menu');

  btn.addEventListener('click', function() {
    btn.classList.toggle('burger-btn--active');
    btn.classList.toggle('burger-btn--animation');
    menu.classList.toggle('nav--active');
  });

})();