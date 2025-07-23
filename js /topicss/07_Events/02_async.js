// setTimeout(function(){        // it works after given inerval but only one time
//     console.log("Kukiii chauhan");
// },3000)  // time given in ms


// setInterval(function(){        // it works after given inerval and continuously by taking brake of gven time
//     console.log("Kukiii chauhan");
// },3000)


// can also be done like this by giving reference

const sayKhushi = function(){        // it works after given inerval but only one time
    console.log("Khushi")
}
setTimeout(sayKhushi, 2000)    // donot write  sayKhushi() it will strt acting like fnct


const changeText= function(){
    document.querySelector('h1').innerHTML="BEST GIRL "
}
const changeMe = setTimeout(changeText, 2000)
// example : on any website , pop up after sometime like purchasing course etc ...

// to stop timeout and changes so  use clearTimeOut
// clearTimeout(changeMe)

// but what is its benifit if u are using both .. so add this on any event
document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPed")
})





const { log } = require("console")
// another function which js provide : common asynchronos function :
// fs.readFile("parameter file_name")etc 

    const fs = require("fs");
    //fileSystem module in nodejs

    fs.readFile("a.txt" , "utf-8" , function(err,data){
        console.log(data);
        
    })


    console.log("hi there ");

    // hi there  
    // heyy this is khushi chauhan demo file

    // hi there runs first bcz readFile is a async function and it delegte the tasks to someone else and run after ...


    let a=0 ;
    //actually takes long time than read file
    for(let i=0 ; i<10000000;i++){
           a++;
    }

    console.log("hii there 2");


    // sol : hi there 
    // for loop chla 
    //hi there 2
    //read file 

    // read file phle hi hogyi thi lkn fir bhi wait kregi ab jb tkk pura kam khtm ni ho jata sequentially 


