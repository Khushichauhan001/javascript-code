// for of       :- specially for array and maps

// ["", "", ""]
// [{}, {}, {}]

// basic syntax

// for (const iterations of object) {     // iteration means i or num or arr or anything name 
                                          // object means kis chiz par loop lgana h .... it is different from js object 
// }


let arr = [1 , 2 , 3 ,4 , 5]
for (const num of arr) {
     console.log(num)      
}

const greetings = "hello  world!"
for (const greet of greetings) {
    console.log(greet)
}


//***************** MAPS **************
 const map = new Map()  // kind of object 
 map.set('IN', "INDIA")
 map.set('FR', "FRANCE")
 map.set('USA', "AMERICA")
console.log(map)

// use of for of loop on arrays
for (const [key , value] of map) {
    console.log(key, ':-' , value);
}


// use of for of loop on object (not applicable) (gives error)
// const myObject ={                // this method is not aplicable on objects .. but applicable on map
//     'game1': 'NFS',
//     'game2': 'PUBG'
// }
// for (const [key, value] of myObject) {
//     console.log(myObject)




