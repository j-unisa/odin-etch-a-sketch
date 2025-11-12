const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++)
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