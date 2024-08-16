// object literal
const user = {
    username: "khushi",
    loginCOunt: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from databaase");
        // console.log(`Username: ${this.username}`)  // jab bht sare users ho or hm kisi ek ka data chahiye toh use this keyword
        console.log(this)  // it contains the data of the object
    }
}
console.log(user.username);
console.log(user.getUserDetails());
// console.log(this)   // in global scope , it contains the empty object bcz it works as a window global object and it has many many more things in it 


//  *************** constructor function **************       

 
// const promiseOne = new Promise()  // new keyword is an constructor fnc which allows u ki aap ek hi object se multiple instances bna sko
// const date = new Date()

function User(username , isLoggedIn , loginCOunt){
    // username = username ... isme ghme ni pta konsa variable h konsa passed parameter h 
    this.username = username;  // this.username is variable
    this.isLoggedIn = isLoggedIn;
    this.loginCOunt = loginCOunt

    return this  // no need 
 }
 const userOne = new User("khushi", 12 , true) // new dene s apni apni value print hogi brna jse niche likh h console bale comment to wo vakue overwrite hojangi
 const userTwo = new User("chauhan", 11 , false)
 console.log(userOne);  // it overwrite the userTwo values in userOne so its not good method

 // what happens when we use new keyword
 // step 1 : an empty object is made
 // step 2 : a constructor function is call
 // step 3 : all instances are injected into this keyword
 // stp 4 : we get function

 // read about instanceof function in js
 
 