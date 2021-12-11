const body = document.body
const container = document.querySelector('.container')
const btnContainer = document.querySelector('.btnContainer')
const gridContainer = document.querySelector('.gridContainer')

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
            e.target.style.backgroundColor = 'black'
        })
    })
}

setGrid(16)

// const blackBtn = document.createElement('button')
// btnContainer.appendChild(blackBtn)
// const certainColorBtn = document.createElement('button')
// btnContainer.appendChild(certainColorBtn)
// const rngBtn = document.createElement('button')
// btnContainer.appendChild(rngBtn)
// const eraserBtn = document.createElement('button')
// btnContainer.appendChild(eraserBtn)
// const resetBtn = document.createElement('button')
// btnContainer.appendChild(resetBtn)

// blackBtn.addEventListener('click', function () {
//     //here we will toggle pixel to have a black background
// });

// certainColorBtn.addEventListener('click', function () {
//     let rgbValue = prompt("Please enter a rgb value in hexadecimal format.")
//     //console.log(rgbValue)
//     //here we will add code to toggle a class on that changes color to the rgb value
// });

// rngBtn.addEventListener('click', function () {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     let rgb = red.toString(16) + green.toString(16) + blue.toString(16)
//     //console.log(rgb)
//     //then here we will add code to toggle a class on that changes color to this selected rgb
    
// });

// eraserBtn.addEventListener('click', function () {
//     //We will make this toggle the class for color off
// });

// resetBtn.addEventListener('click', function () {
//     let newSize = prompt("How many pixels wide would you like the Etch-a-Sketch to be, from 1-100?")
//     if (newSize == size) {
//         //here we will just clear the color from all pixels
//     } else {
//         //delete all pixels
//         size = newSize
//         setGrid(size)
//     }
// });

