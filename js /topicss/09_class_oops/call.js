function SetUsername(username){
    // complex db calls
    this.username = username 
}

function createUser(username , email , password){
    // SetUsername(username)   // it isnot called () isse bhi ni horha toh kuch methods hote h jinse hum extrinsically cal krte h jaise .... .call
     SetUsername.call(username)
    this.email = email
    this.password = password
}

const chai = new createUser("khushi" , "khushi@123.com" , "123")
console.log(chai);  // in this username is not cALLED bcz internally it is not called only refernce is given ...
