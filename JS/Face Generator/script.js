let leftEyebrow = ["images/eyebrows/left/eyebrow1.png", "images/eyebrows/left/eyebrow2.png", "images/eyebrows/left/eyebrow3.png"];
let rightEyebrow = ["images/eyebrows/right/eyebrow4.png", "images/eyebrows/right/eyebrow5.png", "images/eyebrows/right/eyebrow6.png"];

let rightEye = ["images/eyes/right/eye6.png","images/eyes/right/eye7.png", "images/eyes/right/eye8.png", "images/eyes/right/eye9.png", "images/eyes/right/eye10.png", "images/eyes/right/eye11.png", "images/eyes/right/eye12.png", "images/eyes/right/eye13.png", "images/eyes/right/eye14.png", "images/eyes/right/eye15.png", "images/eyes/right/eye16.png"];
let leftEye = ["images/eyes/left/eye1.png", "images/eyes/left/eye2.png", "images/eyes/left/eye3.png", "images/eyes/left/eye4.png", "images/eyes/left/eye5.png", "images/eyes/left/eye6.png"];

let mouth = ["images/mouth/lips1.png", "images/mouth/lips2.png", "images/mouth/lips3.png", "images/mouth/lips4.png", "images/mouth/lips5.png", "images/mouth/lips6.png", "images/mouth/lips7.png", "images/mouth/lips8.png", "images/mouth/lips9.png", "images/mouth/lips10.png", "images/mouth/lips11.png", "images/mouth/lips12.png", "images/mouth/lips13.png", "images/mouth/lips14.png", "images/mouth/lips15.png"];

let nose = ["images/nose/nose1.png", "images/nose/nose2.png", "images/nose/nose3.png", "images/nose/nose4.png", "images/nose/nose5.png", "images/nose/nose6.png", "images/nose/nose7.png", "images/nose/nose8.png", "images/nose/nose9.png", "images/nose/nose10.png", "images/nose/nose11.png", "images/nose/nose12.png"];


//grab html elements
let leftBrowDiv = document.getElementById('left-eyebrow'),
    rightBrowDiv = document.getElementById('right-eyebrow'),
    leftEyeDiv = document.getElementById('left-eye'),
    rightEyeDiv = document.getElementById('right-eye'),
    noseDiv = document.getElementById('nose'),
    mouthDiv = document.getElementById('mouth'),
    button = document.getElementById('dontlike'),
    randomLE, randomLeye,
    randomRE, randomReye,
    randomNose,
    randomMouth;

//generate random eye on load
window.onload = idontlike();


function idontlike() {
    //random number picks from Left Eyebrow array
    randomLE = Math.floor(Math.random()*leftEyebrow.length);
    leftBrowDiv.innerHTML = '<img src="'+leftEyebrow[randomLE]+'">';

    //random number picks from Right Eyebrow array
    randomRE = Math.floor(Math.random()*rightEyebrow.length);
    rightBrowDiv.innerHTML = '<img src="'+rightEyebrow[randomRE]+'">';

        //random number picks from Left Eye array
    // randomLeye = Math.floor(Math.random()*leftEye.length);
    // leftEyeDiv.innerHTML = '<img src="'+leftEyebrow[randomLeye]+'">';


    //random number picks from nose array
    randomNose = Math.floor(Math.random()*nose.length);
    noseDiv.innerHTML = '<img src="'+nose[randomNose]+'">';

    //random number picks from mouth array
    randomMouth = Math.floor(Math.random()*mouth.length);
    mouthDiv.innerHTML = '<img src="'+mouth[randomMouth]+'">';


}







