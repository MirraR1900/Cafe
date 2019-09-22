let buttonUp = document.querySelectorAll('.up');
let buttonDown = document.querySelectorAll('.down');

// button up
for (let i = 0; i < buttonUp.length; i++) {
    buttonUp[i].onclick = function() {
        openDescription();
    };
}
// button down
for (let i = 0; i < buttonDown.length; i++) {
    buttonDown[i].onclick = function() {
        closeDescription();
    };
}

function openDescription() {
    let target = event.target;
    let nameDishMobile = target.parentNode;
    let specificationMobile = nameDishMobile.parentNode;
    let textShow = specificationMobile.childNodes[3];
    textShow.style.display = 'block';
    specificationMobile.style.top = 0;
    target.style.color = 'rgba(255, 255, 255, 0.1)';

};

function closeDescription() {
    let target = event.target;
    let compositionMobile = target.parentNode;
    let specificationMobile = compositionMobile.parentNode;
    specificationMobile.style.top = '65%';
    let upB = specificationMobile.childNodes[1].childNodes[0];
    upB.style.color = 'rgb(255, 255, 255';
    let textHide = specificationMobile.childNodes[3];
    textHide.style.display = 'none';
};