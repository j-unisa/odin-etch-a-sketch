const gridContainer = document.querySelector("#grid-container");

let numberOfSquares = 16;
for (let i = 0; i < numberOfSquares; i++)
{
    let gridSquare = document.createElement("div");
    gridSquare.classList.toggle("grid-square");
    gridContainer.appendChild(gridSquare);
}

let gridSquares = document.querySelectorAll(".grid-square");
gridSquares.forEach((square) => 
{
    square.addEventListener("mouseenter", (e) => 
    {
        square.style.backgroundColor = "green";
    });
});