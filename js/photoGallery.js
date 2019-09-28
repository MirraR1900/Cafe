let createArrayPhoto = document.querySelector('.showClick');
let counter = document.querySelector(".counter");
let counterNumber;
let showPhoto = document.querySelector('.showPhoto');
let previousButton = document.querySelector('.previousButton');
let nextButton = document.querySelector('.nextButton');
let repeat = document.querySelector('.repeat');
let galleryHeader = document.querySelector('.galleryHeader');
let flag = 0;
let score = 1;

let arrayPhoto = [
    'images/wedding/banquet4.jpg',
    'images/wedding/banquet11.jpg',
    'images/wedding/banquet7.jpg',
    'images/wedding/banquet6.jpg',
    'images/wedding/banquet9.jpg',
    'images/wedding/banquet3.jpg',
    'images/wedding/banquet10.jpg',
    'images/wedding/banquet2.jpg',
    'images/wedding/banquet15.jpg',
    'images/wedding/banquet12.jpg',
    'images/wedding/banquet13.jpg',
    'images/wedding/banquet5.jpg',
    'images/wedding/banquet1.jpg',
    'images/wedding/banquet14.jpg',
    'images/wedding/banquet8.jpg'
];

// Sets the initial image when opening the photo gallery
showPhoto.innerHTML = "<img src='images/wedding/banquet4.jpg' alt=''/>";
/**
 * It loops through the array in a loop, gets the length 
 * of the array and sets counterNumber to display in counter.
 */
createArrayPhoto.onclick = function() {
    hidePreviousButton();
    for (let i = 0; i < arrayPhoto.length - 1; i++) {}
    counterNumber = document.createTextNode(score + " / " + arrayPhoto.length);
    counter.append(counterNumber);
};

/**
 * When a button is pressed, increases flag and score by one. 
 * If score is not equal to or greater than the length of the array,
 * it erases the existing image, makes the previousButton button visible 
 * (if score == 1) (function hidePreviousButton() ), and draws a new image (function switchPhoto() ).
 */
nextButton.onclick = function() {
    flag++;
    score++;
    if (score === arrayPhoto.length) {
        repeatButton();
    } else if (score > arrayPhoto.length) {
        repeatShow();
    } else {
        showPhoto.innerHTML = "";
        hidePreviousButton();
        switchPhoto();
    }
};

/**
 * When the button is pressed, decreases flag and score by one. Erases the image, 
 * checks if score === 1, then hide the previousButton button, if arrayPhoto.length > score 
 * change the image of the nextButton button (function nextButtonBack() ). Next, draw the image (function switchPhoto() ).
 */
previousButton.onclick = function() {
    flag--;
    score--;
    showPhoto.innerHTML = "";
    hidePreviousButton();
    nextButtonBack();
    switchPhoto();
};

/**
 * Draws an image. Sets flag as an array index. Creates an img element 
 * and sets the src attribute to it. Draw the new counterNumber value.
 */
function switchPhoto() {
    let index = arrayPhoto[flag];
    let img = document.createElement('img');
    img.setAttribute('src', index);
    counter.innerHTML = "";
    counterNumber = document.createTextNode(score + " / " + arrayPhoto.length);
    counter.append(counterNumber);
    showPhoto.append(img);
    nextButtonBack();
};

// Hides the button if score == 1
function hidePreviousButton() {
    if (score == 1) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = '';
    }
};

// Changes the character on the button
function repeatButton() {
    nextButton.innerHTML = "";
    nextButton.innerHTML = "&#8635;";
    showPhoto.innerHTML = "";
    switchPhoto();
};

/**
 * Sets the initial value of flag and score. Erases the image, hides the previousButton 
 * button and draws a new image
 */
function repeatShow() {
    flag = 0;
    score = 1;
    showPhoto.innerHTML = "";
    hidePreviousButton();
    switchPhoto();
};

// Changes the character on the button
function nextButtonBack() {
    if (score === 1 || arrayPhoto.length > score) {
        nextButton.innerHTML = "";
        nextButton.innerHTML = ">";
    }
};
// Sets the button as the target for resetting the value in the counter
galleryHeader.onclick = function(event) {
    let target = event.target;
    if (target.className === 'close') {
        deleteScore();
    }
};

function deleteScore() {
    counterNumber.remove();
};