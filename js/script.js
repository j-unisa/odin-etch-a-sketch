// === DOM Elements ===
const gridContainer = document.querySelector("#grid-container");
const button = document.querySelector("button");

// === Event Listeners ===
gridContainer.addEventListener("mouseover", (e) => colorInSquares(e));

button.addEventListener("click", () => 
{
    size = +prompt("Enter grid size (50 = 50×50)")
    while (size > 100)
        {
            size = +prompt("100 is the max")
        } 
    createGrid(size);
});

// === Grid Creation Function ===
function createGrid(gridSize)
{
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
}

// === Coloring Logic ===
function colorInSquares(event)
{
    if (event.target.classList.contains("grid-square"))
    {
        if (!event.target.style.backgroundColor)
        {
            event.target.style.backgroundColor = randomRGB();
        }
        
        event.target.style.opacity = Number(event.target.style.opacity || 0) + 0.1;
    }
}

// === Utility Functions ===
function randomRGB()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// === Initialize Grid ===
let size = 16;
createGrid(size);