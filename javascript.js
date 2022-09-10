let container = document.querySelector(`.container`);

function generateGrid(size) {
    let numSquares = size * size;
    let squareSize = container.clientWidth / size - 2;
    console.log(squareSize);
    console.log(numSquares);

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
            console.log(thisSquare);
            if (thisSquare.style.backgroundColor == "white") {
                thisSquare.style.backgroundColor = "black";
            } else if (thisSquare.style.backgroundColor == "black") {
                thisSquare.style.backgroundColor = "white";
            }
        })
    }
}

generateGrid(16);