const body = document.body
const container = document.querySelector('.container')
const btnContainer = document.querySelector('.btnContainer')
const gridContainer = document.querySelector('.gridContainer')

let currentMode = 'black'
let pixel = ''
let size = 16

function setGrid (size) {
    for (let i = 0; i < size ** 2; i++) {
        pixel = document.createElement('div')
        pixel.classList.add("pixel")
        pixel.style.backgroundColor = 'white';
        gridContainer.appendChild(pixel)
    }
    gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, auto)`
    let pixels = document.querySelectorAll('.pixel')
    pixels.forEach(pxl => {
        pxl.addEventListener('mouseover', (e) => {
            // switch(currentMode) {
            //     case 'black':
            //         e.target.style.backgroundColor = 'black'
            //         break;
            //     case 'random':
            //         let red = Math.floor(Math.random() * 256);
            //         let green = Math.floor(Math.random() * 256);
            //         let blue = Math.floor(Math.random() * 256);
            //         e.target.style.backgroundColor = `${red} + "," + ${green} + "," + ${blue}`
            //         break;
            //     case 'eraser':
            //         e.target.style.backgroundColor = 'white'
            //         break;
            // }
            e.target.style.backgroundColor = 'black'
        })
    })
}

function resetGrid(size) {
    gridContainer.innerHTML = ''
    setGrid(size)
}

// const blackBtn = document.getElementById('black')
// blackBtn.addEventListener('click', function () {
//     currentMode = 'black'
// });

// const randomBtn = document.getElementById('random')
// randomBtn.addEventListener('click', function () {
//     currentMode = 'random'
// });

// const eraserBtn = document.getElementById('eraser')
// eraserBtn.addEventListener('click', function () {
//     currentMode = 'eraser'
// });

const resizeBtn = document.getElementById('resize')
resizeBtn.addEventListener('click', function() {
    size = prompt(`How many boxes would you like in each row? Previously you had ${size} boxes.`)
    resetGrid(size)
});

const resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', function() {
    resetGrid(size)
});

setGrid(16)