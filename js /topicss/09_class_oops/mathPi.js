// .getOwnPropertyDescriptor  :- is use to shoe some hidden properties of object

console.log(Math.PI);   // and we cannot even overwrite it ...i.e. we cannot touch his value of object but whyyyyy!????

const descripter = Object.getOwnPropertyDescriptor(Math , "PI") // here math is a module and uske andr se mjhe pi ki value chachiye 
console.log(descripter);
// see here .. value of PI is so hardcoded that we cannot change it anyhow .. see the output
// writable : false , enumerable: false , configurble: false 


// so if we want in our project ki hm kisi chiz ko aesi value de jo koi change na kr ske .. so we can define our properties
  

// check the propert ki hm use overwrite kr skte h ya nai by using getownpropertydescriptor
const nurse = {
    name: 'shalu',
    salary: 20000 , 
    isAvailable : true
} 
console.log(Object.getOwnPropertyDescriptor(nurse , "name"));
// writable : true , enumerable: true , configurable: true 


// if i want to set my own properties then in some cases we can define our own properties

Object.defineProperty(nurse , 'name' , {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(nurse , "name"));
// writable : false , enumerable: false , configurable: true 

// cannot access object directly so use entries 
for (let [key , value] of   Object.entries(nurse)) {
    console.log(`${key} : ${value}`);
}

// code tear when we inject function inside the object then in place of value we get full function so for solving this prblm we use for loop

const Doctor  = {
    name : 'Rahul',
     salary: 20000,

     Hospital : function(){
        console.log("government hospital");
        
     }
}
for (let [key , value] of Object.entries(Doctor)) {

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}