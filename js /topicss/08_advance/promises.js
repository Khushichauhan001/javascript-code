// const promiseOne =  new Promise()       // new keyword is used as promise is an object 
//  study about Q and Bluebird library
// they are still availble on github :- https://github.com/petkaantonov/bluebird/blob/master/src/bluebird.js
// creation of promises : it takes callback function

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
    console.log('async task is complete');
     resolve();   // to connect it with .then 
    },1000)
})
// now we have to consume this promise
promiseOne.then(function(){             // resolve ka connection h .then k sath 
   console.log('promise consumed');
   
})     

new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log('async task 2 is completed');
    resolve(); 
    },1000)
        
    }).then(function(){
        console.log('promise 2 consumed');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "khushi", email: "khushi@gmail.com"})  // the parameters are passed here
 },1000)
})
promiseThree.then(function(user){    // automatically user get the parameters passed in upper resolve
    console.log(user)
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true // true / false 
        if(!error) {
            resolve({username: "kukki", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    
    },1000)
    
})

// promiseFour.then().catch()  // .catch lekr error bali value lelenge
promiseFour.then((user) => {
    console.log(user);     // ye ni hoga print quiki eroor true kr rkha h toh error hi print hoga 
    return user.username
}).then((username) => {      // dubara .then m vo value aaygi jo upr bale ka output hoga
    console.log(username);
}).catch(function(error){
    console.log(error);     // output m error aaya likha hua qki upr hmne error ko true kr rkha h or isi lie hmra user.username bhi print ni horha 
                     // age hum uppr if condition m wo false krde toh hmaara error ni aayga or user.username bhi print hoga
}).finally(() => console.log('The promise is either resolved or rejected'));


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false // true / false 
        if(!error) {
            resolve({username: "kuku", password: "1234"})
        } else {
            reject('ERROR: js went wrong')
        }
    
    },1000)
  })
// second way or approach to do work like then and catch :- async await
// async await waits for some time to perform the task otherwise give u error

async function consumePromiseFive(){
    // const response = await promiseFive    // promisefive is an object so we donot take it like this promisefive()
    // console.log(response);           // async await donot handle the error directly so to handle it peacefully we use try and catch method
   try {
       const response = await promiseFive
       console.log(response);
   } catch (error) {
        console.log(error);
   }   
}
consumePromiseFive();

// async function  getAllUser() {     //#40 ....40.3
//    try {
//     const response = await fetch('https://api.github.com/users/Khushichauhan001')
//     // console.log(response);
    
//     const data = await response.json   // ye response.json bhi time leta h perform hone m toh hme ise bhi await krana PDEGA
//     console.log(data)   
//    } catch (error) {
//      console.log("E: ",error)
//    }
// }
// getAllUser();

// this can be done by then and catch
fetch('https://api.github.com/users/Khushichauhan001')
.then((response) => {
    return response.json()
})
.then((data) => {console.log(data);
    
})
.catch((error) => console.log('error'))




//harikirat
function myOwnPromisifiedTimeout(){
    return new Promise(function(resolve,reject){
        reject();  // onError();  fn itself which pass as argument 
    })
}
const p = myOwnPromisifiedTimeout();
p.then(function(){     // if proomise resolve toh return jo bhi ho isme aajyga 

}).catch(function(){ // otherwise , if reject th return hokr isme aajyga 

})



//concept of .then

setTimeout(function(){
    console.log("hi there");
    
}, 1000)   

// whatever upper fun do , my this function also do the same 
setTimeout(1000).then(function(){
    console.log("hi there ");
    
})     // when promise got resolved after 1 sec , then function run 