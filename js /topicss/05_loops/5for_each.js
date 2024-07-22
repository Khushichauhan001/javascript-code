// for each ..... filter .... 


// for each loop donot return any value 
// const myArray = ["js" , "cpp", "ruby" , "python"]
//  const values = myArray.forEach( (item) => {   // here we store the function into a variable (values) 
//     console.log(item);           // agr simple sirf myArray.foreach(()=>{...}) hota toh run hojta but variable m store hoke error ayga
//     return item
// })

// console.log(values);


const myNUms = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNUms.filter((num) => (num > 4))   // first (num) m sari values aa jayngi or dusre (..) m condition check hogi or sirf condition satisfy bala hi aayga
// const newNums = myNUms.filter((num) => {num > 4})  // aese jo y normal syntax h aese krne m ye empty array dega bcz acts as implicit function ... refers to 03_basics / thisarrow.js

// to write in crrct format .. use return keyword
const newNums = myNUms.filter((nums) => {
return nums >4
})
// console.log(newNums); // overall if {} use then use return otherwise write simple in one line () => ()


    // if u want to use for each instead of filter then :-
 const count = [1,2,3,4,5,6,7,8,9,10]
 const newCount = []
 count.filter( (num) => {
         if (num > 7) {
           newCount.push(num)  
         }
 })
//  console.log(newCount);

const shoes = [             
    {
        Brand: 'PUMA', newLaunch: '2024' , opening: '1978'
    },
    {
       Brand: 'HRX', newLaunch: '2022' , opening: '1988'
    },
    {
        Brand: 'RED TAPE', newLaunch: '2025' , opening: '1984'
    },
    {
        Brand: 'GUCCI', newLaunch: '2022' , opening: '1967'
    },
    {
        Brand: 'AQUALITE', newLaunch: '2020' , opening: '1969'
    }
]
// const userShoes = shoes.filter( (shs) => shs.newLaunch === '2022')   // shs is a name of item which is on each object .. jo har obect ko define krega

// let userShoes = shoes.filter( (shs) => (shs.opening > 1969))   // either in this way or
 let userShoes = shoes.filter( (shs) => {
    return shs.opening > 1969 && shs.newLaunch === '2024'
})    

console.log(userShoes);

    
 