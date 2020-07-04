let sideLength = 16;
const gridContainer = document.querySelector('#grid-container');

function generateGrid() {
    for(let i = 0; i < sideLength; i++)
    {
        const rowDiv = document.createElement('div'); 
        rowDiv.id = "row" + (i + 1);
        gridContainer.appendChild(rowDiv) 
        for(let j = 0; j < sideLength; j++)
        {
            const square = document.createElement('button');
            square.className = "etchSquare";
            rowDiv.appendChild(square);
        }
    }
}