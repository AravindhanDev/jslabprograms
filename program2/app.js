const part = document.getElementById("part")
const features = document.getElementById("features")
const feature = document.getElementById("feature")
const parts = document.getElementById("parts")
const addParts = document.getElementById("addParts")
const partsData = []
const partsObj = {
    part: "",
    features: [],
}

part.addEventListener("change", (e) => {
    partsObj.part = e.target.value
})

function renderFeatures() {
    let html = ``
    for (let data of partsObj.features) {
        html += `<li>${data}</li>`
    }
    feature.innerHTML = html
}

features.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        partsObj.features.push(e.target.value)
        renderFeatures()
        features.value = ""
    }
})

addParts.addEventListener("click", () => {
    if (partsObj.part === "") {
        console.log("Please select parts")
        return
    }
    partsData.push({ ...partsObj })
    partsObj.part = ""
    partsObj.features = []
    feature.innerHTML = ""
    renderData()
})

function renderData() {
    let html = ``
    for (let data of partsData) {
        let features = data.features.join(", ")
        html += `<li>${data.part}: ${features}</li>`
    }
    parts.innerHTML = html
}
