const rows = document.getElementById ('rows');
const columns = document.getElementById ('columns');
const color = document.getElementById ('color');
const button = document.getElementById ('button');
const grid = document.getElementById ('grid');

button.addEventListener("click", makeGrid);

function makeGrid() {

grid.innerHTML = "";

    for (let i = 0; i < rows.value; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classicList.add('row');
        grid.appendChild(rowDiv);
        for (let j=0; j < columns.value; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundcolor = color.value;
            rowDiv.appendChild(box);
        }

    }

}