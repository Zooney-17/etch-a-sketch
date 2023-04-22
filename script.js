const gridContainer = document.querySelector('#grid-container')

 for (let i = 1; i <= Math.pow(10,2); i++) {
    const grid = document.createElement('div');
    grid.style.flexBasis = '50px';
    gridContainer.appendChild(grid);
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'black';
    });
};

const clear = document.querySelector('#clear');

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    };
}

let newGrid;

function promptGridSize() {
    newGrid = prompt("How many squares per side do you want?\n(Minumum 1, Maximum 100)", 10);

    if (isNaN(newGrid)) {
        newGrid = 10;
        alert ('ERROR. Please enter a valid number');
    } else if (newGrid > 100) {
        newGrid = 10;
        alert ('Please enter a number less than or equal to 100')
    } else if (newGrid <= 0) {
        newGrid = 10;
        alert ('Please enter a number greater than 0');
    }
}

function createNewGrid(newGrid) {
    let newFlexBasis = 500 / newGrid + 'px';

    for (let i = 1; i <= Math.pow(newGrid, 2); i++) {
        const replacementGrid = document.createElement('div');
        replacementGrid.style.flexBasis = newFlexBasis;
        gridContainer.appendChild(replacementGrid);
        replacementGrid.addEventListener('mouseover', () => {
            replacementGrid.style.backgroundColor = 'black';
        });
    }
};

clear.addEventListener('click', () => {
    clearGrid();
    promptGridSize();
    createNewGrid(newGrid);
});