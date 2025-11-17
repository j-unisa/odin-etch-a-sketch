const button = document.querySelector("button");
button.addEventListener("click", () => 
{
    size = +prompt("Enter grid size (50 = 50×50)")
    while (size > 100)
        {
            size = +prompt("100 is the max")
        } 
    createGrid(size);
});

function createGrid(gridSize)
{
    const gridContainer = document.querySelector("#grid-container");
    const containerSize = gridContainer.clientWidth;
    const squareSize = containerSize / gridSize;

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
        square.addEventListener("mouseenter", () => 
        {
            if (!square.style.backgroundColor)
            {
                square.style.backgroundColor = randomRGB();
            }
            
            square.style.opacity = Number(square.style.opacity || 0) + 0.1;
        });
    });
}

function randomRGB()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let size = 16;
createGrid(size);