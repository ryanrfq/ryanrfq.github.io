let last_scroll_pos = 0;
let header = document.querySelector('.header');
let h1 = document.querySelector('h1');

window.addEventListener('scroll', function(event){
  last_scroll_pos = window.scrollY;

  if (last_scroll_pos > 100) {
    header.classList.add('scrolled');
    h1.classList.add('scrolled');
  }
  else {
    header.classList.remove('scrolled');
    h1.classList.remove('scrolled');
  }
});