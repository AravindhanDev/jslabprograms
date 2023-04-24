const exclusion = document.getElementById("exclusion")
const strengthen = document.getElementById("strengthen")
const emphasize = document.getElementById("emphasize")
const wordInput = document.getElementById("wordInput")
const output = document.getElementById("output")

exclusion.addEventListener("click", () => apply("un"))
strengthen.addEventListener("click", () => apply("plus"))
emphasize.addEventListener("click", () => apply("doubleplus"))

function apply(prefix) {
    let word = wordInput.value
    let newWord = prefix + word
    output.innerHTML = newWord
}
