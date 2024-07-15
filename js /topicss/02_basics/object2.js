// const tinderUser = new object  (it gives empty object ) (singelton object )
const tinderUser = {}   // (it also gives empty object)  (but not singelton)
 
tinderUser.id = "1223abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)
console.log(typeof tinderUser.name)

const anotherUser = {                 // object ke ander object 
  email: "some@gmail.com",
  fullname: {
    userfullname: {
        firstname: "khushi",
        lastname: "chauhan"
    }
  }
}
console.log(anotherUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
 
// const obj3 = { obj1, obj2 } (canbe done like this but it object ke andr objec and it seems complicated so neeche bala)
 // const obj3 = Object.assign({}, obj1 , obj2 )  // phla oject target object k lie empty chd dete h it looks professional but not  compulsory to do it 
 
 const obj3 = { ...obj1, ...obj2}  // useed mostly 
  console.log(obj3);

  // array ke andr objects ho toh kse access kremge 

  const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    }
  ]
  users[1].email

  console.log(tinderUser)
  console.log(Object.keys(tinderUser))   // it converts the keys into array form 
  console.log(Object.values(tinderUser))
//   console.log(object.entries(tinderUser))  // made into individual array ... syntax :- [key , value]
  //the Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.



  // for asking ki property or object h ya nai 
    console.log(tinderUser.hasOwnProperty('isLoggedIn'));

    const course = {
        coursename: "js in hindi",
        price: "999",
        teacher: "hitesh"
    }

     console.log(course.teacher) 

    //  (alternate way )

      const {teacher} = course
      console.log(teacher)

      const navbar = ({comapny })  => {   // { } iske ander kuch dikhe toh smjh jana ki destructure kia gya h 

      }
      navbar(company = "khushi")   


      // ************** JSON ************

      {                      // json is also a type of object  
        name: "khushi",        // syntax:- {    }
        class: "btech",       // here name itself is also a string nd its value also is a string
        rollno: "49"
      }

      [         // it is use to acces data from api 
        {},
        {},
        {}, 
      ]