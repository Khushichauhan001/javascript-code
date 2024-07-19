// forin loop :- specially for objects 
const myObject = {           // for object we use forin loop
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    pty: 'python'
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
    
}

/// forin loop can also be applied on arrays

const programming = ["js" , "cpp" , "py" , "ruby",  "java"]
for (const key in programming) {
    console.log(programming[key]);
}