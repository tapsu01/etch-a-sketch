const container = document.querySelector('.primary');
const sliderRange = document.querySelector('#slider-range');
const gridSizeOutput = document.querySelector('#grid-size-output');
const btnReset = document.querySelector('.btn-reset');
const hoverCover = document.querySelector('.hover-color');
let grid = sliderRange.value;

sliderRange.addEventListener('input', function () {
  grid = this.value;
  showGridSize();
});

btnReset.addEventListener('click', function () {
  document.querySelectorAll('.square').forEach(function (el) {
    el.style.backgroundColor = 'transparent';
  });
});

sliderRange.addEventListener('change', init);

init();
function init() {
  container.innerHTML = '';

  showGridSize();
  drawGrid();
  addGridItemEvent();
}

function drawGrid() {
  for (let i = 0; i < grid; i++) {
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('d-flex', 'fd-row');
    for (let j = 0; j < grid; j++) {
      const flexItem = document.createElement('div');
      flexItem.classList.add('square');
      flexContainer.appendChild(flexItem);
    }

    container.appendChild(flexContainer);
  }
}

function addGridItemEvent() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(function (el) {
    el.addEventListener('mouseover', function () {
      this.style.backgroundColor = hoverCover.value;
    });
  });
}

function showGridSize() {
  gridSizeOutput.querySelector('span').textContent = `${grid}x${grid}`;
}
