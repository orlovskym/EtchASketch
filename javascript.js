let container = document.querySelector(`.container`);
let newGridButton = document.querySelector(`.button`);

function generateGrid(size) {
    deleteGrid();
    let numSquares = size * size;
    let squareSize = container.clientWidth / size - 2;

    for (i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.style.height = squareSize + "px";
        square.style.width = squareSize + "px";
        square.classList.add("tile");
        square.style.backgroundColor = "white";
        container.appendChild(square);
    }
    activateSquares();
}

function activateSquares() {
    let squares = document.querySelectorAll(`.tile`);
    for (i = 0; i < squares.length; i++) {
        let thisSquare=squares[i];
        thisSquare.addEventListener('mouseover', () => {
            if (thisSquare.style.backgroundColor == "white") {
                thisSquare.style.backgroundColor = "black";
            } else if (thisSquare.style.backgroundColor == "black") {
                thisSquare.style.backgroundColor = "white";
            }
        })
    }
}

function deleteGrid(){
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function getSize(){
    while (true){
        let size = prompt("Enter the size of the desired grid (maximum 100): ", 16);
        if (size < 101 && size > 0){
            return size;
        }
    }
}

generateGrid(16);
newGridButton.addEventListener('click', () => {
    generateGrid(getSize());
})