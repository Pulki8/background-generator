let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("#getNew");

function randomBack() {
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.background =
        "linear-gradient(to right, "
        + "#" + randomColor1
        + ", "
        + "#" + randomColor2
        + ")";
    color1.value = "#" + randomColor1;
    color2.value = "#" + randomColor2;

    css.textContent = body.style.background + ";";
}

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomBack);