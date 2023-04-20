const gridContainer = document.querySelector('#grid-container')

for (let i = 0; i <= 255; i++) {
    const grid = document.createElement('div');
    grid.style.width = '55px';
    grid.style.height = '55px';
    grid.style.border = '1px solid black';
    gridContainer.appendChild(grid);
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'black';
    });
};
