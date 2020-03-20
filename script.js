var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var btnRand = document.getElementsByClassName("btnRandomize");

var colorCode = document.querySelector("h3");
var newline = "\r\n";

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // colorCode.textContent = body.style.background + ";";
    colorCode.textContent = "Color 1: " + color1.value + ";" + newline + "Color 2: " + color2.value + ";";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;   
}

function randomizeColor(event) {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

document.onload = setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btnRand[0].addEventListener("click", randomizeColor);