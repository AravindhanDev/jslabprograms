const units = document.getElementById("units")
const subsidy = document.getElementById("subsidy")
const totalCurrentCharges = document.querySelector(".totalCurrentCharges")
const currentCharges = document.querySelector(".currentCharges")
const netAmount = document.querySelector(".netAmount")

units.addEventListener("keyup", (e) => {
    let units = e.target.valueAsNumber
    totalCurrentCharges.innerText = calculateBill(units)
    currentCharges.innerText = calculateBill(units)
    netAmount.innerText = calculateBill(units)
})

subsidy.addEventListener("keyup", (e) => {
    let subsidyValue = e.target.valueAsNumber
    netAmount.innerText = calculateBill(units.value, subsidyValue) + 50
})

function calculateBill(consumption, subsidy = 0) {
    if (consumption <= 100) {
        billAmount = 0
    } else if (consumption <= 200) {
        billAmount = (consumption - 100) * 3.75 + 100
    } else if (consumption <= 400) {
        billAmount = (consumption - 200) * 4 + 250 + 100 * 3.75
    } else if (consumption <= 600) {
        billAmount = (consumption - 400) * 4.25 + 300 + 200 * 4 + 100 * 3.75
    } else {
        billAmount =
            (consumption - 600) * 5 + 400 + 200 * 4.25 + 200 * 4 + 100 * 3.75
    }
    let totalAmount = billAmount - subsidy
    return totalAmount
}
