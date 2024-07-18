const userEmail = []

if (userEmail) {     // here no comparison is done no cond. is checked but here we give the value in string and consider sttring as a true value  
    console.log("Got user email")
} else {
    console.log("Don't have email")
}     
// if there is empty string "" then else part will execute(consider false) 
 //      if [] -> empty array then if part execute (considered true )

 // falsy valuee
 // false , 0, -0 , BigInt 0n, "" , NaN , null , undefined 
  
 // truthyy value 
 // []  , "0" , 'false' , " "(inverted with one space) , {object} , function(){}
      


 // how to check empty array 
 if(userEmail.length === 0){
    console.log("array is empty")
 }


 // how to check object is empty or not
 const emptyObj = {}
 if (Object.keys(emptyObj).length === 0) {   // Object.keys() returns an array and then apply length proprty of array
    console.log("object is empty")
 }


 // Nullish Coalescing Operator (??) : for null and undefined
 let val1;
//  val1 = 5 ?? 10    // answer 5
//  val1 = null ?? 10  anser 10
// val1 = undefined ?? 15   ans:- 15
// val1 = null ?? 10 ?? 20   ans:- 10


 console.log(val1);


 // ternary operator
 condition ? true : false