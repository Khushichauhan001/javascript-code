// about mapss
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map( (num) => num+10 )
 

// chaining method .map().map().filter....etc
const newNums = myNumbers
                 .map( (num) => num * 10)
                 .map( (num) => num + 1)
                 .filter( (num) => num > 21)
console.log(newNums);