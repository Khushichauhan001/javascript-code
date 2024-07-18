// (basic syntax)
// switch (key) {    
//     case value:
        
//         break;

//     default:
//         break;
// }
  const month = 3
switch(month) {
    case 1:
        console.log("January")
        break;
        case 2:
        console.log("feb")
        break;
        case 3:
        console.log("march")
        break;                // when the condition matches then after that case all cases are executed except default case
                              // thats why we use break so that only that case will execute
        case 4:
        console.log("april")
        break;
        default:
            console.log("default case match");
} 