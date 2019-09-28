let buttonMobileNavigation = document.querySelector('.buttonMobileNavigation');
let mobileNavigationSite = document.querySelector('.mobileNavigationSite');
let flagСondition = false;

/**
 * When a button is pressed, if flagСondition is false, it changes the color of the button, 
 * opens the menu, sets display: block, flagСondition sets true. 
 * When pressed again, the menu closes, the button changes color by setting display: none
 * to close the menu and flagCondition assigns false
 */
function pressButton() {
    if (flagСondition === false) {
        buttonMobileNavigation.style.color = '';
        buttonMobileNavigation.style.color = 'rgb(0, 0, 255)'; // blue
        openMenu();
    } else {
        buttonMobileNavigation.style.color = '';
        buttonMobileNavigation.style.color = 'rgb(0, 0, 0,)'; // black
        closeMenu();
    }
};

function openMenu() {
    mobileNavigationSite.style.display = 'block';
    flagСondition = true;
};

function closeMenu() {
    mobileNavigationSite.style.display = 'none';
    flagСondition = false;
};

buttonMobileNavigation.addEventListener("click", pressButton);