const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let index = 0;

  function rotate() {
    const current = cases[index];
    current.classList.remove('rotator__case_active');

    index = index + 1;
    if (index >= cases.length) {
      index = 0;
    }
    const next = cases[index];

    next.classList.add('rotator__case_active');

    if (next.dataset.color) {
      next.style.color = next.dataset.color;
    }

    setTimeout(rotate, Number(next.dataset.speed));
  }

  setTimeout(rotate, Number(cases[0].dataset.speed));
});
