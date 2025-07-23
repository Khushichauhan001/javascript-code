// primitive datatype
// 7types : strings , number ,, boolean , null , undefined , symbol, BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsidetemp = null
  const id = Symbol('123')
  const anotherId = Symbol('123')
    
  console.log(id === anotherId)

  // reference (non primitive )
  // [arrays , functions , and object ]

   const heros = ["mummy " , "papa" , "bhai"] // array  
   // example of function 
    const myFunction = function(){
        console.log("khushi");
    }

    // example of object 
    let myObj = { 
        name: "khushi",
        age: 18,
    }

    // datatype of all non primitive are functions and datatype of function --- object function

    //https://262.ecma-international.org/5.1/#sec-11.4.3 { for documentation}



     // +++++++++++++++ MEMORY ++++++++++++++++++ 

     // Two types :- 
     // stack (all primitive refernce ) , heap (non - primitive)
     // in stack a copy of ur datatype or value is given and when u do changes it chnge into copy and remain same original value .
      let myName = "khushi"

      let anotherName = myName
      anotherName = "koko"

      console.log(myName);
      console.log(anotherName);

      let userOne = {
        email: "khushichauhan2506@gmail.com",
        upi: "yhjkhb"
      }

      let userTwo = userOne 

      userTwo.email = "kokochauhan@27",

      console.log(userOne.email)
      console.log(userTwo.email)


      // heapm sare objects and functions jate h and hmesa reference hi dete h ... agr reference m change kia toh original m bhi change ho jata h 
      // qki dono ek hi function ko access kr rhe hote h heap m islie unlike stack ..... see last 4 ..5  lines for example 