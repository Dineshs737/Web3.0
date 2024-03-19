
let item1 = {
    name:'phone',
    price:25000,
    quantity:1,
    dimensions:
    {
        length:7,
        hieght:5,
        breadth:3.5
    },
    buy: function()
    {
        console.log("item added to cart")
    },
    // another way to create function

    addToList()
    {
        console.log("item added to list")
    }
}
console.log(item1)

let item2 = new Object()
item2.name = 'charger'
item2.price = 5000
item2.quantity = 5

console.log(item2)

// create new property

// item1.quanlity = "beast"

item1.buy()

//invoking
item1.addToList()

