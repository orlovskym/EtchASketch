let container = document.querySelector(`.container`);

function generateGrid(size) {
    let numSquares = size * size;
    let squareSize = container.clientWidth / size;
    console.log(squareSize);
    console.log(numSquares);

    for (i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.style.Height = squareSize;
        square.style.Width = squareSize;
        square.classList.add("tile");
        square.style.backgroundColor = "white";
        container.appendChild(square);
    }
    activateSquares();
}

function activateSquares() {
    let squares = document.querySelectorAll(`.tile`);
    squares[0].addEventListener('hover', () => {
        if (this.backgroundColor = "white") {
            this.backgroundColor = "black";
        } else if (this.backgroundColor = "black") {
            this.backgroundColor = "white";
        }
    })
    squares[0]
}

generateGrid(16);