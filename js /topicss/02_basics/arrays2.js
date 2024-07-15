 const marvel_heroes = ["thor" , "spiderman" , "ironman"]
 const dc_heroes = ["superman" , "flash" , "batman"]
  

 marvel_heroes.push(dc_heroes)
 console.log(marvel_heroes); // it add second array into first and clearly shows that the array is combine 


 const allHeroes = marvel_heroes.concat(dc_heroes)
 console.log(allHeroes) // it add both array smoothly and return  new array 


const allnewHeroes = [ ...marvel_heroes, ...dc_heroes]  // splash method (very easy like breaking of mirror glass)
console.log(allnewHeroes); 
console.log(typeof allnewHeroes)


const another_array = [1,2,3,[4,5,6], 7,8,[6,7,[4,5]]]
const other_another_array = another_array.flat(Infinity) // it resolve all the arrays in one line and in bracket we have to give the depth upto how much array we want to resole & trick :- take infinity
console.log(other_another_array)


console.log(Array.isArray("Khushi"))
console.log(Array.from("Khushi")); // convert anything into array
console.log(Array.from({name: "Khushi"})); // imp case ... it gives empty array as it donot understand ki kya chiz ko array bnana h 


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2 , score3));