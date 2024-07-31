


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