const sin = document.getElementById("sin")
const cos = document.getElementById("cos")
const tan = document.getElementById("tan")
const round = document.getElementById("round")
const log = document.getElementById("log")
const pow = document.getElementById("pow")
const log10 = document.getElementById("log10")
const abs = document.getElementById("abs")
const factn = document.getElementById("nfact")
const result = document.getElementById("result")
const number = document.getElementById("number")
const power = document.getElementById("power")

sin.addEventListener("click", () => {
    result.innerText = Math.sin(number.value)
})

cos.addEventListener("click", () => {
    result.innerText = Math.cos(number.value)
})

round.addEventListener("click", () => {
    result.innerText = Math.round(number.value)
})

pow.addEventListener("click", () => {
    result.innerText = number.value ** power.value
})

log.addEventListener("click", () => {
    result.innerText = Math.log(number.value)
})

log10.addEventListener("click", () => {
    result.innerText = Math.log10(number.value)
})

abs.addEventListener("click", () => {
    result.innerText = Math.abs(number.value)
})

factn.addEventListener("click", () => {
    result.innerText = fact(number.value)
})

function fact(n) {
    if (n <= 1) return 1
    return n * fact(n - 1)
}
