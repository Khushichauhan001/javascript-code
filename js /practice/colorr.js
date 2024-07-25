var body = document.querySelector("body");
var red = document.querySelector("#redButton");
var green = document.querySelector("#greenButton");
var yellow = document.querySelector("#yellowButton");
var blue = document.querySelector("#blueButton");
var def = document.querySelector("#defaultButton");
var black = document.querySelector("#blackButton");
var pink = document.querySelector("#pinkButton");

red.addEventListener("click", changeRed);
green.addEventListener("click", changeGreen);
yellow.addEventListener("click", changeYellow);
blue.addEventListener("click", changeBlue);
def.addEventListener("click", defaultColor);
black.addEventListener("click", changeBlack);
pink.addEventListener("click", changePink);

function changeRed(){
    document.body.style.background = "red";
    document.body.style.color = "black";
}

function changeGreen(){
    document.body.style.background = "green";
    document.body.style.color = "white";
}

function changeYellow(){
    document.body.style.background = "yellow";
    document.body.style.color = "black";
}

function changeBlue(){
    document.body.style.background = "blue";
    document.body.style.color = "white";
}

function defaultColor(){
    document.body.style.background = "white";
    document.body.style.color = "black";
}

function changeBlack(){
    document.body.style.background = "black";
    document.body.style.color = "white";
}

function changePink(){
    document.body.style.background = "pink";
    document.body.style.color = "black";
}