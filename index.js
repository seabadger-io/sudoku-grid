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

const loadGrid = () => {
  const root = document.getElementById('grid-root');
  const board = document.createElement('div');
  board.classList.add('board');
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.id = i + '-' + j;
      const content = document.createElement('div');
      content.classList.add('content');
      content.innerHTML = (j + (i * 3)) % 9 + 1;
      tile.appendChild(content);
      board.appendChild(tile);
    }
  }
  root.appendChild(board);
  setTilesSize();
  window.addEventListener('resize', setTilesSize);
};

if (document.readyState !== 'loading') {
  loadGrid();
} else {
  document.addEventListener('DOMContentLoaded', loadGrid);
}