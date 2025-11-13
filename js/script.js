const button = document.querySelector("button");
button.addEventListener("click", () => 
{
    size = +prompt("Enter grid size (50 = 50×50)")
    createGrid(size * size);
});

function createGrid(gridSize)
{
    const gridContainer = document.querySelector("#grid-container");

    for (let i = 0; i < gridSize; i++)
    {
        let gridSquare = document.createElement("div");
        gridSquare.classList.toggle("grid-square");
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