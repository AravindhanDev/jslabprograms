const colors = document.getElementsByTagName("img")
const imgContainer = document.getElementById("img-container")
let index = 0

imgContainer.addEventListener("click", () => {
    colors[index++].style.zIndex = 999
    console.log(index)
    if (index === 5) reset()
})

function reset() {
    for (let color of colors) {
        color.style.zIndex = 1
    }
    index = 0
}
