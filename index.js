var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgSrc1 = "images/dice" + randomNumber1 + ".png";
var imgSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img").setAttribute("src", imgSrc1);
document.querySelectorAll("img")[1].setAttribute("src", imgSrc2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").textContent = "🎉 Patricia gana!"
} else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").textContent = "Jorge gana! 🎉"
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "Empate"
}