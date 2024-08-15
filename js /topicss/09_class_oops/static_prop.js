// real life exmple : i want ki jese hi koi user bne bese hi use ek unique id mil jaye
// not full understand 

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){        // if we want ki hum is id ka access har us insan ko ni dena chate jo is id s instanent hua h 
        return `123`     // so simply just use static ... it stop tthe property to access
     }                      // sbke lie access ni h .. kbhi hoga kbhi ni 
}

const khushi = new User("Khushi")
// console.log(`id is: ${khushi.createId()}`);  // jse isme ise acces ni h createId ka 
khushi.logMe()



class Teacher extends User {
    constructor(username , Email){
        super(username)
        this.Email = Email

    }
}

const iphone = new Teacher("iphone" , "i@iphone.com")
// iphone.logMe();
console.log(iphone.createId());   // static jese hi krdia wo kisj ko bhi access ni derha na child ko na parent ko 


 