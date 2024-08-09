function myName(){
    console.log("K");
    console.log("H");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}
myName()

// function addTwoNumbers(num1 , num2){       // jo upr likhte h num1 , num2 unhe bolte h parameters 
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,4)                 // neeche fnct call krte time jo vlue pass krte h unhe bolte h arguments

function addTwoNumbers(num1 , num2){
    let result = num1 + num2   // (1 method)
    return result 
    return num1 +num2           // (2 method)
}

const result = addTwoNumbers(4,5)
console.log("Result:" , result)

function loginUserMessage(username){
    if(username === undefined){                // samecan be wriiten as if(!username){.....}
        console.log("please enter username ")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("khushi"))
console.log(loginUserMessage())   // isme agr value hi pass ni kri toh undefined aayga 



// for calculating the total cart price in e-commerce app

function calculateCartPrice(...num1){      //... return all value but in a bundle of array []  called rest operator ...
    return num1
}
console.log(calculateCartPrice(200,300,400))

function calculateCartPrice(val1 , val2, ...num1){      // isme starting 2 values goes into values and rest all the values goes into num1
    return num1
}
console.log(calculateCartPrice(200,300,400,2000,360))




// how to use objects in functions 
const user = {
    username: "khushi",
    price: 999
}

function handleUser(anyuser){
    console.log(`username is ${anyuser.username} and price is ${anyuser.price}`);

}
 
handleUser(user)
// 2nd method 
handleUser({
    username: "sam",
    price: 899
})



// how to use array in a function

const myNewArray = [200,240,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));