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
    '../images/wedding/banquet4.jpg',
    '../images/wedding/banquet11.jpg',
    '../images/wedding/banquet7.jpg',
    '../images/wedding/banquet6.jpg',
    '../images/wedding/banquet9.jpg',
    '../images/wedding/banquet3.jpg',
    '../images/wedding/banquet10.jpg',
    '../images/wedding/banquet2.jpg',
    '../images/wedding/banquet15.jpg',
    '../images/wedding/banquet12.jpg',
    '../images/wedding/banquet13.jpg',
    '../images/wedding/banquet5.jpg',
    '../images/wedding/banquet1.jpg',
    '../images/wedding/banquet14.jpg',
    '../images/wedding/banquet8.jpg'
];

showPhoto.innerHTML = "<img src='../images/wedding/banquet4.jpg' alt=''/>";

createArrayPhoto.onclick = function() {
    hidePreviousButton();
    for (let i = 0; i < arrayPhoto.length - 1; i++) {}
    counterNumber = document.createTextNode(score + " / " + arrayPhoto.length);
    counter.append(counterNumber);
};

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

previousButton.onclick = function() {
    flag--;
    score--;
    showPhoto.innerHTML = "";
    hidePreviousButton();
    nextButtonBack();
    switchPhoto();
};

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

function hidePreviousButton() {
    if (score == 1) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = '';
    }
};

function repeatButton() {
    nextButton.innerHTML = "";
    nextButton.innerHTML = "&#8635;";
    showPhoto.innerHTML = "";
    switchPhoto();
};

function repeatShow() {
    flag = 0;
    score = 1;
    showPhoto.innerHTML = "";
    hidePreviousButton();
    switchPhoto();
};

function nextButtonBack() {
    if (score === 1 || arrayPhoto.length > score) {
        nextButton.innerHTML = "";
        nextButton.innerHTML = ">";
    }
};

galleryHeader.onclick = function(event) {
    let target = event.target;
    if (target.className === 'close') {
        deleteScore();
    }
};

function deleteScore() {
    counterNumber.remove();
};