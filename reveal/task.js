reveal = document.querySelector('.reveal');

function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();

  return top >= 0 && bottom <= window.innerHeight;
}

window.addEventListener('scroll', () => {
    if (isVisible(reveal)) {
    reveal.classList.add('reveal_active');
    } else {
        reveal.classList.remove('reveal_active');
        }
});