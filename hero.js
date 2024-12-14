
let radiusDiv = 5; 
const maxRadiusDiv = 29; 
const speedDiv = 0.3; 
let directionDiv = 1; 
let divWhite = 0;

let radiusText = 29;
let maxRadiusText = 49;
const speedText = 0.2;

let textWhite = 0.2;
let maxWhite= 0.2
if(window.innerWidth < 600){
  textWhite = 0.8;
  maxRadiusText = 180;
}
function animateGradientDiv() {
  radiusDiv += speedDiv;
  if(divWhite <= 0.2)divWhite += 0.05

  const heroSection = document.querySelector(".heroSection"); 
  heroSection.style.background = `radial-gradient(circle at top center, rgba(255, 255, 255, ${divWhite}), rgba(0, 0, 0, 0.8) ${radiusDiv}%)`;

  if (radiusDiv < maxRadiusDiv) {
    requestAnimationFrame(animateGradientDiv); 
  } else {

    animateTextGradient();
  }
}

function animateTextGradient() {
  radiusText += speedText;
  if(textWhite <= 1)textWhite += 0.1
  

  const heroTitle = document.querySelector(".herotitle"); 
  heroTitle.style.background = `radial-gradient(circle at top center, rgba(255, 255, 255, ${textWhite}), rgba(64, 51, 51) ${radiusText}%)`;
  heroTitle.style.webkitBackgroundClip = "text"; 
  heroTitle.style.webkitTextFillColor = "transparent"; 
  

  if (radiusText < maxRadiusText) {
    requestAnimationFrame(animateTextGradient); 
  }
}

animateGradientDiv();