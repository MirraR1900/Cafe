let buttonUp = document.querySelectorAll('.up');
let buttonDown = document.querySelectorAll('.down');

// Sets the onclick method on all buttons with the up class.
for (let i = 0; i < buttonUp.length; i++) {
    buttonUp[i].onclick = function() {
        openDescription();
    };
}
// Sets the onclick method on all buttons with the down class.
for (let i = 0; i < buttonDown.length; i++) {
    buttonDown[i].onclick = function() {
        closeDescription();
    };
}

/**
 * It finds out which button is pressed, goes up the tree receiving parentNode. 
 * Next, it gets childNodes to display the text by setting display: block. 
 * Then make the button transparent
 */
function openDescription() {
    let target = event.target;
    let nameDishMobile = target.parentNode;
    let specificationMobile = nameDishMobile.parentNode;
    let textShow = specificationMobile.childNodes[3];
    textShow.style.display = 'block';
    specificationMobile.style.top = 0;
    target.style.color = 'rgba(255, 255, 255, 0.1)';

};


/**
 * It finds out which button is pressed, goes up the tree receiving the parentNode. 
 * Sets the initial span value. Next, it gets childNodes and checks if the up button exists. 
 * If upB! = Undefined then makes it visible. Then it finds childNodes and hides the text by setting display: none
 */
function closeDescription() {
    let target = event.target;
    let compositionMobile = target.parentNode;
    let specificationMobile = compositionMobile.parentNode;
    specificationMobile.style.top = '65%';
    // let upB = specificationMobile.childNodes[1].childNodes[0];
    let upB = specificationMobile.childNodes[1];
    if (upB != undefined) {
        let upBShow = upB.childNodes[0];
        upBShow.style.color = 'rgb(255, 255, 255)';
    }
    let textHide = specificationMobile.childNodes[3];
    textHide.style.display = 'none';
};