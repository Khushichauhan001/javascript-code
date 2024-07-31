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