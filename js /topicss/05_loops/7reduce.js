// reduce method
// example :- shopping card m payment add krte rhna h 


const myNums = [1,2,3]

const myTotal = myNums.reduce(function (accumulator, currentvalue){
    console.log(`acc: ${accumulator} and currvalue: ${currentvalue}`);
    return accumulator + currentvalue
},0)      // ,0 lga ke value initialize kri h hmne 
console.log(myTotal);

// try it with arrow 

const myTotalVaue = myNums.reduce((accumulator , currentvalue) => {
    return accumulator + currentvalue 
},0)
console.log(myTotalVaue);

// shopping cart
const shoppingCart = [
    {
        category: "jeans",
        price: 800
    },
    {
        category: "crop top",
        price: 1300
    },
    {
        category: "lehenga",
        price: 8000
    },
    {
        category: "saree",
        price: 2000
    },
]
const totalBill = shoppingCart.reduce((accumulator , item) => {
         return accumulator + item.price 
},0)
console.log(totalBill);
