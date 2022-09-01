const container = document.querySelector("#container");

function createGrid() {
  for (let i = 1; i < 257; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    container.appendChild(div);
    console.log(div);
  }
}

createGrid();
