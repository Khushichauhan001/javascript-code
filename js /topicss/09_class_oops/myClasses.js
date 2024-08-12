// after ES6
class User{             // class is also a keyword  , can make direct object
    constructor(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

encryptPassword(){
    return `${this.password}`
}
}