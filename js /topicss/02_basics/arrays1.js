// difference in slice and splice
 const myArr = [0,1,2,3,4,6,5,7,8]
console.log("A" , myArr);

const myn1 = myArr.slice(0,4) 

console.log(myn1);
console.log("B" , myArr); // isme range same rhngi A ki trh 

const myn2 = myArr.splice(0,5)

console.log(myn2);
console.log("C" , myArr);  // isme range sari rhgi A ki trh lkn isme jo elements ko splice kia h wo remove ho jaynge baki puri series rhgi 