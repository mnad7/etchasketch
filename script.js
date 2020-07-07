let sideLength = 16;
const gridContainer = document.querySelector('#grid-container');

function generateGrid() {
    for(let i = 0; i < sideLength * sideLength; i++)
    {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.classList.add('filled');
        });
        gridContainer.appendChild(square);
    }
    gridContainer.style.gridTemplateColumns = "repeat(" + sideLength + ", 1fr)";
}

generateGrid();

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', () => {
    console.log("grid cleared.");
    const squares = document.querySelectorAll('.square');
    squares.forEach((s) =>{
        s.classList.remove('filled');
    });
});

const btnChange = document.querySelector('#change-size');
btnChange.addEventListener('click', () => {
    let size = "E";
    while(isNaN(size))
    {
        size = prompt("Enter side length.");
    }
    sideLength = size;
    const squares = document.querySelectorAll('.square');
    squares.forEach((s) =>{
        s.remove();
    });
    generateGrid()
});