// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5)
    {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log (`inner loop value ${i} and inner loop ${j}`);
        // console.log(i + `*` + j + `=` + i*j);
 }
}


// break and cotinue 
// break lgne k bd koi bhi cndn execute nai krta 
// continue mff krdeta h or agla bhi continue rkhta h 

// ****************while loop  **************
  let index = 0
  while (index <= 10){
    console.log(`value is ${index}`);
    index = index + 2 
  }


  let myArray = ["flash" , "batman" , "superman"]
  let arr = 0
  while(arr < myArray.length){
    console.log(myArray[arr]);
    arr++
  } 



// *************DO WHILE **************
  let score = 11 // check at 1 and  then at 11
  do {
    console.log(score);
    score++;
  } while (score<=10);

  

  