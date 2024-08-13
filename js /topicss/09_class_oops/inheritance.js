// important 

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

// now want ki kisi login page pr ek br kisi ne user bnke enter kia r bd m wo teacher bnna chahta h toh iske lie hme extend krna pdega 

class Teacher extends User{
    constructor(username , email, password){
        super(username);     // ye kya krega ki extends m  jayga ki konsa function call hua h (user) or fir upr jayga user m line 1 m or khud hi sb kuch kr dega .. this bhi lga dega khud hi 
     this.email = email;
     this.password = password; 
    }
    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
        
    }
}
const output = new Teacher("khushi","ksh@gmail.com", "2332")
output.addCourse()
output.logMe()   // true bcz we inherit 

const userOutput = new User("khushi")
// userOutput.addCourse()         // gives error bcz add couse is not 4 users
userOutput.logMe()

// console.log(output === userOutput);   // false
// console.log(output === Teacher);     // false
 console.log(output instanceof Teacher);   // true
 console.log(output instanceof User);    // true (bcz teacher is also instance of user)
 
 
 

