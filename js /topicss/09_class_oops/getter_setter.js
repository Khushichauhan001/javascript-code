// 45

// in this we studied about ki we made a class and some properties are added into it BUT u donot want to give acces of those properties to all and also sometimes want to give but with doing some special changes (customization) into it  .... for this , use getter ... setter

class User {
    constructor(email ,password){
        this.email = email,
        this.password = password
    }
      
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
       this._email = value    // can be anything valuesssss...
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        // this.password = value        // gives error ki maximum call stack size exceeded (bcz prblm is ki constuctor bhi set kr rha h value or set bhi to browser is confued ki kiski set krni h )
      this._password =value    // make new variable

    }
}

const khushi = new User("khushi@123" , "4567")
console.log(khushi.email);
