let a = 300
if(true){
    let a = 10
   const b = 20
   console.log(a)
}
 
// console.log(a);


function one(){
    const username = "khushi"

    function two(){
        const website = "vscode"
        console.log(username);  // gives output bcz username is global for two function
    }
    // console.log(website);    // it is not executed bcz it is outside the block scope
    two()                        // then this fnc calls and then in this username ka console print hoga and after that we get output of username 
}

// one()                          not afffect anything in the code bcz it calls outside the block


if(true) {
    const username = "khushi"
    if(username === "khushi") {
        const website = " youtube"
       console.log(username + website);    // executed
    }
    // console.log(website)      not executed bcz it is outside the block code

 }

 // console.log(username);      not executed

 //****************interesting ***************

 console.log(addone(5))
 function(num){           // in this method of declaration we get the value even in the upper side
    return num + 1
 }

 addTwoNumbers(5)
 const addTwoNumbers = function(num){    // in this method of declaration of function we get error ... in this we store it into a variable named addTwoNumbers
    return num + 2 
 }