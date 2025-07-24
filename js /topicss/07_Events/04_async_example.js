// async function 
//some sync task 
// want my work which async return 
//some other synctask 

function someSyncTask1(){
    console.log("sync task  1");
}

function someSyncTask2(){
    console.log("SYNC TASK 2 ");
    
}

setTimeout(function(data){
    someSyncTask2();   // it canot call outside this func like 1 bcz it use the result 
}, 1000);
someSyncTask1();
 




// promise class needs a fn as an argument and fn need resolve as an argument 
function fn(resolve){
    for( i=1 ; i<50;i++){
       a=a+1;
      console.log("executed");
    }
    resolve(a);
}
let a = 1;
const p = new Promise(fn);