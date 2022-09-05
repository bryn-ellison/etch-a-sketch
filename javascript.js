const body = document.querySelector("body");
const container = document.querySelector("#container");
let gridsize = 0;
const button = document.createElement("button");
button.classList.add("button");
button.innerText = "Create a new sketch";
body.insertBefore(button, container);
button.addEventListener("click", () => {
  function buttonclick() {
    gridWidth = prompt(
      "What size grid do you want? (enter width, maximum 100)"
    );
    if (gridWidth > 100) {
      alert("Please enter a width under 100");
      buttonclick();
    }
    reset(gridWidth);
  }
  buttonclick();
});

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
    container.classList.add("container");
    div.addEventListener("mouseenter", (e) => {
      div.classList.add("hover");
    });
    container.appendChild(div);
  }
}
