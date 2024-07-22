const user= {
    username: "khushi",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website `);   // this refers the current context inside the function
        console.log(this);
    }
}
    user.welcomemessage()
    // user.username = "sam"
    // user.welcomemessage()
    // console.log(this);               

    // internet k andr sbse jyda global object is window    

    // function chai(){
    //     let username = "khushi"
    // console.log(this.username);  // error bcz we can run this function only inside the object and this is function
    // }                            // answer is undefined 
    // chai()

    // const chai = function(){     // aese function declare krke bhi ni hoga wrong method so use arrow function
    // let username = "khuhsi"
    // console.log(this.username);
    // }
    // chai()

    const chai = () => {
        let username = "hitesh"
        console.log(this.username);
    }
    chai()


       // basic arrow function
    const addTwo = (num1 , num2) => {
        return num1 + num2
    }
     // another way (implict return)
    
    const addThree = (num1 , num2) => (num1 + num2)   //(dont need to write return keyword while using parenthesis)

   // when you want to return object then you cannot get output by only write it in {} , ,also bnd kro inhe ()isme 
    const addme = (num1 , num2) => ({username: "khushi"})
    
    console.log(addTwo(3,4))
    console.log(addThree(5,4))
    console.log(addme(2,6));

