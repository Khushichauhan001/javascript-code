   /// imp slide 
const myArray = ["js" , "cpp", "ruby" , "python"]
 myArray.forEach( function (value){                 // generl fn sntax is :- function name(){} 
    console.log(value);                            // so remove name for backfunction and simply give value , item  whatever u want 
 } )

 // for arrow function 
 myArray.forEach( (item) => {
     console.log(item);
 } )


 function printMe(item){    // can also be like this ki function declare karo and then simply print me 
    console.log(item);
 }
myArray.forEach(printMe)


myArray.forEach( (item , index , arr)=> {
    console.log(item , index , arr)
})

const coding = [                // [{},{},{}]  :- this form (vvvvvvv... muchhh imp)(array k andr object ke andr s particular chiz ka data chahiye)
    {                            // can also be use filters
        name: "khushi",
        filename: "ksss"
    },
    {
        name: "sakshi",
        filename: "pkkkk"
    },
    {
        name: "riya",
        filename: "ghhh"
    },
]

coding.forEach( (item)=> {      // ye har ek object ko same iteration treat krega ... items or fir 
    console.log(item.name)      // hum u har item m jo filename y kch chahiye use access krlenge sbme s 
})

