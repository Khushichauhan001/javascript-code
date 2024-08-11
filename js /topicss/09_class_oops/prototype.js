let myName = "khushi     "
let mysurname = "chauhan     "
// console.log(myName.length)  gives 11 including spaces
// console.log(myName.trim().length); /// can be done like this but it is for good a enough

Object.prototype.trueLength = function(){
      console.log(this.trim().length);
      
}
mysurname.trueLength();
"javascriptt  ".trueLength();  // can access direct 


// i want ki jitne bhi string ho unke sbke sath by default property aajaye jiska nam ho 

let heroes =[ "thor", "spiderman"]

let heroesPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.khushi = function(){
    console.log(`khushi is present in all object`);
}
heroesPower.khushi() // isme hmne ek object prototype bna dia jisse hmara ye ek trh s property bn gyi or ise hm kahi bhi access kr skte h like in  array , in string or in anywhere bcz at the end sb object hi h toh hmne direct object m hi add krdi ye prototype
heroes.khushi()


// ab agr hmne prototype hi array ka bnaya toh object m wo ni milegi qki uppar level balo  ko neeche ki properties ni milti
Array.prototype.arrayPrototype = function(){
    console.log(`in array prototype, property is added `);
    
}
heroes.arrayPrototype()
// heroesPower.arrayPrototype()  // error will come



// inheritance 

const User = {
    name: "kukki",
    email:"kukki@google.com" 
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}      // yha har oject ka apna inheritance h , apni properties h , koi sharing ni horhi ..... han by default properties to common hi rhengi 

// Now we want ki kinhi do object ko link krde jisse  ek ki property dono p lg ske toh :-
// use __proto__                (kknown as prototype inheritance)

Teacher.__proto__ = User  // cn be used outside the scope 

//modern syntax    (a method)
Object.setPrototypeOf(TeachingSupport, Teacher)
