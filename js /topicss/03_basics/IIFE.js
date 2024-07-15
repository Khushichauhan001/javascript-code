//  Immediately Invoked Function Expressions (IIFE)   
// it is the function which can executes immediately and secondly ...
// sometimes global scope k pollution se prblm hoti h kai bar so to remove pollution f global scope we use iife

(function chai(){  // NAMED IIFE
    console.log(`DB CONNECTED`)
})();     // ; must to stop ....and phla bala () = for rapping function as we did in arrow function and 2nd () = for execution call
    

// can alo be done like this 
( () => {
    console.log(`DB CONNECTED TWO `)
})();

// if u want to give value then u can give it as 
( (name) => {        // give name as the name of the function  
    console.log(`DB CONNECTED TWO ${name} `)      
})(`khushi`);        // call as the function name 
