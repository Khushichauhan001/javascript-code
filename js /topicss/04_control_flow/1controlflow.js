// if else

// conditional opertor <,>,<=.>=, == , != 
// === -> it also checks the datatype .... e.g. 2 === "2" (false)
// !== -> it checks the negative sign

// const isUserLoggedIn = true

// if( 2 !== -2){
//     console.log("executed");
// }



// second method
const balance = 1000
if(balance>500) console.log("you are rich ");  // (implict scope) 


//nesting if (basic if , else if , else)
// self practice



// for checking two or more conditions
const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

 
if (userLoggedIn && debitcard  && 2==2) {          // checks both the conditions and both should be true
    console.log("allow for shoping");
}
if(loggedInFromGoogle || loggedInFromEmail) {       // anyone should be true
    console.log("allow for logging")
}