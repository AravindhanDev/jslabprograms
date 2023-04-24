const stationary_items = [
    {
        id: 1,
        name: "Four-line notebook",
        stock: 2,
    },
    {
        id: 2,
        name: "Two-line notebook",
        stock: 10,
    },
    {
        id: 3,
        name: "HB Pencil",
        stock: 8,
    },
    {
        id: 4,
        name: "Eraser",
        stock: 3,
    },
    {
        id: 5,
        name: "Drawing Notebook",
        stock: 2,
    },
]

function sale(stationaryId) {
    if (stationary_items[stationaryId].stock <= 0) return "Out of stock"
    stationary_items[stationaryId].stock--
    return `purchased 1 ${stationary_items[stationaryId].name}`
}

function stock() {
    return stationary_items.reduce((acc, cur) => acc + cur.stock, 0)
}

;(function () {
    console.log(stock())
    console.log(sale(2))
    console.log(sale(4))
    console.log(stock())
})()
