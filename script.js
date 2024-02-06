const rows = document.getElementById('rows');
const columns = document.getElementById('columns');
const color = document.getElementById('color');
const submit = document.getElementById('submit');
const grid = document.getElementById('grid');

submit.addEventListener("click", makeGrid);

function makeGrid() {
    grid.innerHTML = "";
    for (let i = 0; i < rows.value; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        grid.appendChild(rowDiv);
        for (let j = 0; j < columns.value; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundColor = color.value;
            box.addEventListener('click', changeColor); 
            rowDiv.appendChild(box);
        }
    }
}

function changeColor(event) {
    let selectedBox = event.target; 
    selectedBox.style.backgroundColor = color.value; 
}