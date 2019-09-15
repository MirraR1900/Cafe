var createArrayPhoto = document.querySelector('.showClickDisplay1366');
var counter = document.querySelector(".counterDisplay1366");
var counterNumber;
var showPhoto = document.querySelector('.showPhotoDisplay1366');
var previousButton = document.querySelector('.previousButtonDisplay1366');
var nextButton = document.querySelector('.nextButtonDisplay1366');
// var repeat = document.querySelector('.repeat');
var flag = 0;
var score = 1;

var arrayPhoto = [
  '../images/wedding/banquet_4.jpg', 
  '../images/wedding/banquet_11.jpg', 
  '../images/wedding/banquet_7.jpg', 
  '../images/wedding/banquet_6.jpg', 
  '../images/wedding/banquet_9.jpg', 
  '../images/wedding/banquet_3.jpg', 
  '../images/wedding/banquet_10.jpg', 
  '../images/wedding/banquet_2.jpg',  
  '../images/wedding/banquet_15.jpg', 
  '../images/wedding/banquet_12.jpg',   
  '../images/wedding/banquet_13.jpg',  
  '../images/wedding/banquet_5.jpg',  
  '../images/wedding/banquet_1.jpg', 
  '../images/wedding/banquet_14.jpg', 
  '../images/wedding/banquet_8.jpg', 
  '../images/wedding/banquet_16.jpg' 
];

createArrayPhoto.onclick = function () { 
  showPhoto.innerHTML = "<img src='../images/wedding/banquet_4.jpg' alt=''/>";
  hidePreviousButton();
  for (let i = 0; i < arrayPhoto.length - 1; i++) { }
  counterNumber = document.createTextNode(score + " / " + arrayPhoto.length);
  counter.append(counterNumber);
};

nextButton.onclick = function () {
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

previousButton.onclick = function () {
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

