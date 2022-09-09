let container = document.querySelector(`.container`);

function generateGrid(size) {
    let numSquares = size * size;
    let squareSize = container.clientWidth / size - 2;
    console.log(squareSize);
    console.log(numSquares);

    for (i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.style.height = squareSize+"px";
        square.style.width = squareSize+"px";
        square.classList.add("tile");
        square.style.backgroundColor = "white";
        container.appendChild(square);
    }
    activateSquares();
}

function activateSquares() {
    let squares = document.querySelectorAll(`.tile`);
    squares[0].addEventListener('mouseover', () => {
        if (this.backgroundColor = "white") {
            this.backgroundColor = "black";
        } else if (this.backgroundColor = "black") {
            this.backgroundColor = "white";
        }
    })
    squares[0]
}

generateGrid(16);