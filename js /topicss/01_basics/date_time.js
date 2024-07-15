// ******* DATE ********

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());   // a/t me ... this is much better for me


console.log(typeof myDate);  /// object


let myCreatedDate = new Date(2024, 6 , 27); // month started at 0 
console.log(myCreatedDate.toDateString());

let mynewDate = new Date("2024-07-27"); // it is format of yy/mm/dd and it start from 1
console.log(mynewDate.toLocaleString());


// ********* TIME STAMP *******

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mynewDate.getTime());  // u get answer in mili second 
console.log(Math.floor(Date.now()/1000)); // get answer in second

// customize ur date abnd time by using local string fnc

myCreatedDate.toLocaleString('default', {
    weekday : "long"
})