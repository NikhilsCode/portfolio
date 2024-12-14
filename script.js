import {summaryData } from "./constant.js"
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const headingData = summaryData;

const circle = document.getElementsByClassName("circle");
const center_circle = document.getElementById("center_circle");
const heading = document.getElementById("title");
const tiitleWord = document.getElementById("tiitleWord");
const subtitleWord = document.getElementById("subtitleWord");
const paragraphLines = document.getElementById("paragraphLines");


let variable = 50;
let raduis = 155;
if (windowWidth < 580) {
    variable = 55;
    raduis = 130;
}

function calculateSin(degrees) {
    var radians = degrees * (Math.PI / 180);
    return Math.sin(radians) * raduis + variable;
}

function calculateCos(degrees) {
    var radians = degrees * (Math.PI / 180);
    return Math.cos(radians) * raduis + variable;
}

let click = 1;
let rad = 0;

let i = 0;
while (i < circle.length) {
    circle[i].style.left = calculateCos(rad) + "px";
    circle[i].style.top = calculateSin(rad) + "px";
    rad += 60;
    i = (i + 1);
}

let currentIndexImage = 0;
document.getElementsByClassName("summary-details")[0].addEventListener("click", () => {
    let i = 0;
    rad = 45 * click;
    while (i < circle.length) {
        circle[i].style.left = calculateCos(rad) + "px";
        circle[i].style.top = calculateSin(rad) + "px";
        rad += 60;
        i = (i + 1);
    }
    heading.classList.add('fade-out');
    paragraphLines.classList.add('fade-out');
    tiitleWord.classList.add('fade-out');
    subtitleWord.classList.add('fade-out');

    setTimeout(() => {
        // Update content after fade-out
        circle[click% headingData.length].style.border = "1px solid #ffffff"; 
        heading.innerHTML = headingData[currentIndexImage].innterText;
        paragraphLines.innerHTML = headingData[currentIndexImage].paragraphLines;
        tiitleWord.innerHTML = headingData[currentIndexImage].tiitleWord;
        subtitleWord.innerHTML = headingData[currentIndexImage].subtitleWord;

        // Switch to fade-in animation
        heading.classList.remove('fade-out');
        heading.classList.add('fade-in');
        paragraphLines.classList.remove('fade-out');
        paragraphLines.classList.add('fade-in');
        tiitleWord.classList.remove('fade-out');
        tiitleWord.classList.add('fade-in');
        subtitleWord.classList.remove('fade-out');
        subtitleWord.classList.add('fade-in');
        currentIndexImage = (currentIndexImage + 1) % headingData.length;
        click++;
    }, 300); // Matches the fade-out animation duration

})






