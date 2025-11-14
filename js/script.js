const button = document.querySelector("button");
button.addEventListener("click", () => 
{
    size = +prompt("Enter grid size (50 = 50×50)")
    createGrid(size);
});

function createGrid(gridSize)
{
    const gridContainer = document.querySelector("#grid-container");
    const gridHeight = gridContainer.clientHeight;
    const gridWidth = gridContainer.clientWidth;
    const squareSize = Math.floor(Math.min(gridHeight, gridWidth) / gridSize);

    gridContainer.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++)
    {
        let gridSquare = document.createElement("div");
        gridSquare.classList.toggle("grid-square");
        gridSquare.style.height = `${squareSize}px`;
        gridSquare.style.width = `${squareSize}px`;
        gridContainer.appendChild(gridSquare);
    }

    colorInSquares();
}

function colorInSquares()
{
    let gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => 
    {
        square.addEventListener("mouseenter", (e) => 
        {
            square.style.backgroundColor = "green";
        });
    });
}

let size = 16;
createGrid(size);