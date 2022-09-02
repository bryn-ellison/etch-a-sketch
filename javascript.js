const body = document.querySelector("body");
const container = document.querySelector("#container");
let gridsize = 0;
const button = document.createElement("button");
button.innerText = "Create a new grid";
button.addEventListener("click", () => {
  gridWidth = prompt("What size grid do you want? (enter width, maximum 100)");
  reset(gridWidth);
});
body.appendChild(button);

function reset(gridWidth) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createGrid(gridWidth);
}

function createGrid(gridWidth) {
  const gridSize = gridWidth * gridWidth;

  for (let i = 1; i < gridSize; i++) {
    const div = document.createElement("div");
    document.documentElement.style.setProperty("--rowNum", gridWidth);
    div.classList.add("grid-square");
    div.addEventListener("mouseenter", (e) => {
      div.classList.add("hover");
    });
    container.appendChild(div);
  }
}
