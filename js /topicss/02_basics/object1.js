// singelton  ... koi bbhi constructor se agar kuch bnate h toh wo singleton object bnyga .. mtlb apne trh k ek hi object
// baki kisi or s kuch bnayge toh wo singelton nahi bnta 
//  Object.create           // it is called constructor method (discuss later)

//objecct literals

const mySym = Symbol("key 1")

const JsUser = {
    name: "Khushi",  // here name , age etc keywords are treated as string
    "full name": "khushi chauhan",
    [mySym]: "mykey1",  //need to declare first and should be in square bracket to become symbol otherwise remains string
    age: 18,
    location: "Dhampur",
    email: "khushi@12gmail.com",
    isLoggedIn: false
}

console.log(JsUser.location) // its correct but not applicable all time 
console.log(JsUser["email"])  // always correct 
 //console.log(JsUser.full name) // error
 console.log(JsUser["full name"])
 console.log(JsUser[mySym]);


 JsUser.email = "koko2@gmail.com" // it changes the email 
 Object.freeze(JsUser) // to freze so that no one can do changes in this 
 
 
 JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting)