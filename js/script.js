const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++)
{
    let gridSquare = document.createElement("div");
    gridContainer.appendChild(gridSquare);
}