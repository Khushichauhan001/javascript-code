// set interval property
// const sayDate = function(){
//     console.log("khushi", Date.now());
// }
// setInterval(sayDate,1000)

// here we can also pass the third variable     
// const sayDate = function(str){
    // console.log(str, Date.now());
// }
// const intervalId = setInterval(sayDate, 1000, "hi")

// to stop this loop
// clearInterval(intervalId)

const sayName = function(){
    console.log("khushi" , Date.now());
}
let id;
document.querySelector('#start').addEventListener('click', function(){
   id = setInterval(sayName , 1000);
})

document.querySelector('#stop').addEventListener('click', function(){
 // const id = setInterval(sayName , 1000)
 clearInterval(id);
 console.log('stopped')
})