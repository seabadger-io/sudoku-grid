const setTilesSize = () => {
  window.requestAnimationFrame(() => {
    const width = document.querySelector('.tile').clientWidth;
    document.querySelectorAll('.tile').forEach((tile) => {
      if (tile.clientHeight !== width) {
        tile.style.height = width + 'px';
        tile.style.fontSize = width + 'px';
        tile.style.lineHeight = width + 'px';
      }
    });
  });
};

const onMouseOverTile = (event) => {
  const target = event.currentTarget;
  const x = target.getAttribute('data-x');
  const y = target.getAttribute('data-y');
  window.requestAnimationFrame(() => {
    document.querySelector('.board').querySelectorAll('.tile').forEach((tile) => {
      if (tile.getAttribute('data-x') === x || tile.getAttribute('data-y') === y) {
        tile.classList.add('active-line');
      } else {
        tile.classList.remove('active-line');
      }
    });
  });
};

const onMouseLeftBoard = () => {
  window.requestAnimationFrame(() => {
    document.querySelector('.board').querySelectorAll('.tile').forEach((tile) => {
      tile.classList.remove('active-line');
    });
  });
};

const loadGrid = () => {
  const root = document.getElementById('grid-root');
  const board = document.createElement('div');
  board.classList.add('board');
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.id = y + '-' + x;
      tile.setAttribute('data-x', x);
      tile.setAttribute('data-y', y);
      tile.addEventListener('mouseover', onMouseOverTile);
      const content = document.createElement('div');
      content.classList.add('content');
      content.innerHTML = (x + (y * 3)) % 9 + 1;
      tile.appendChild(content);
      board.appendChild(tile);
    }
  }
  board.addEventListener('mouseout', onMouseLeftBoard);
  root.appendChild(board);
  setTilesSize();
  window.addEventListener('resize', setTilesSize);
};

if (document.readyState !== 'loading') {
  loadGrid();
} else {
  document.addEventListener('DOMContentLoaded', loadGrid);
};