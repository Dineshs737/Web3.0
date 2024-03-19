
// for(let i=1 ; i<=5 ; i++)
// {
//     console.log(i)
// }
// console.log("\n")

// // console.log(i)

// for(let i=10 ; i>=1 ; i--)
// {
//     console.log(i)
// }

// while(true)
// {
//     let num = Number(prompt("Enter the number :"))
//     if(!isNaN(num))
//         break

// }

console.log("continue demi")

for(let i=1 ; i<=10 ; i++)
{
    if(i%3==0) continue
    console.log(i)
}

console.log("using array values in java script")

 arr = ['apple','orange','grapes','mango']

console.log(arr)

// get value from array using for loop

for( i=0 ;i<arr.length ; i++)
{
    console.log(arr[i].toUpperCase())
}
console.log("\n")
for(let fruit of arr)   console.log(fruit)

item ={
    name: "phone",
    quantity:1,
    price:25000
}

console.log("\n")
//access object using for looop

for(let key in item)
{
    console.log(item[key])
}