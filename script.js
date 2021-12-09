let size = 16
const body = document.body
const container = document.createElement('div')
container.className = 'container'
body.append(container)

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        let div = document.createElement('div')
        let rowNum = "row" + `${i}`
        div.classList.add("pixel", rowNum)
        div.innerText = `${rowNum}`
        container.appendChild(div)
    }
}

pixel.addEventListener('click', function (e) {
    classList.add("hovered")
});
