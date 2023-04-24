const formContainer = document.getElementById("formContainer")
const cityInput = document.getElementById("cityInput")
const genForm = document.getElementById("genForm")

genForm.addEventListener("click", generateForm)

function generateForm() {
    let city = cityInput.value
    city = city.toLowerCase()
    let items = 0
    switch (city) {
        case "chennai":
            items = 15
            break
        case "coimbatore":
        case "madurai":
            items = 12
            break
        case "salem":
            items = 8
            break
        case "tiruchirappalli":
            items = 6
            break
        case "thoothukudi":
            items = 2
            break
        default:
            break
    }

    let form = ""
    for (var i = 1; i <= items; i++) {
        form += `<input type="text" placeholder="Enter item" /> <br>`
    }
    formContainer.innerHTML = form
}
