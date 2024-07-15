const name = "Khushi"
const subscriber = "1050"

// console.log(name + subscriber + " value") // old way and not recommended

console.log(`hello my name is ${name} and my subscriber is ${subscriber}`);

const gamename =  new String('khushich')

console.log(gamename[0]);
console.log(gamename.length)
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('h'));
const newString = gamename.substring(0 , 4)
console.log(newString);

const anotherString = gamename.slice(-8, 4)
console.log(anotherString);
