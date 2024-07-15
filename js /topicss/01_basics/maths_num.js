    // *************** NUMBERS *********
const score = 400 
console.log(score)

const balance = new Number(10000);
console.log(balance );

console.log(balance.toString().length);
console.log(balance.toFixed(4)); // important

const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(4))

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN')); // cnvert no. into indian type like put commas after zeroes 


// ****************************   MATHSS   ********************

console.log(Math);

// these are functions not properties like abs , round etc
console.log(Math.abs(-4)); // convert -ve value into +ve value and not vice verca
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // convert upeer value =>  5
console.log(Math.floor(4.8));  // cmvrt into lower value => 4

console.log(Math.random());  // gives value b/w 0 and 1 
console.log((Math.random()*10) + 1);  // shift value by  1 digit 
console.log(Math.ceil((Math.random()*10) + 1));  // gives value b/w 1 and 9 

const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max - min)) + min );  // very much important formula for generating random number
