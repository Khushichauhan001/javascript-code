// generate a random color 

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for( let i = 0 ; i< 6 ; i++){
color += hex[Math.floor(Math.random() * 16 )];
    }
    return color;
};
let id;
const startChangeColor = function(){
    // id = setInterval(changeBgColor, 1000); //  can also be done like this , if null is not given
if(!id){
    id = setInterval(changeBgColor, 1000);
}
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangeColor = function(){
    clearInterval(id);
    id = null; 
};

document.querySelector('#start').addEventListener('click', startChangeColor);

document.querySelector('#stop').addEventListener('click', stopChangeColor);
    