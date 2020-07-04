let sideLength = 16;
const gridContainer = document.querySelector('#grid-container');

function generateGrid() {
    for(let i = 0; i < sideLength; i++)
    {
        const rowDiv = document.createElement('div'); 
        gridContainer.appendChild(rowDiv) 
        for(let j = 0; j < sideLength; j++)
        {
            const square = document.createElement('button');
            square.classList.add('square');
            square.style.height = 600 / sideLength + "px";
            square.style.width = 600 / sideLength + "px";
            square.addEventListener('mouseover', () => {
                square.classList.add('filled');
            });
            rowDiv.appendChild(square);
        }
    }
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
    let size = "bruh";
    while(isNaN(size))
    {
        size = prompt("Enter side length. Anything over 20 starts breaking i don't know why I'll fix it later Kapp");
    }
    sideLength = size;
    const squares = document.querySelectorAll('.square');
    squares.forEach((s) =>{
        s.remove();
    });
    generateGrid()
});