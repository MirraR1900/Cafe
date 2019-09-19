var buttonMobileNavigation = document.querySelector('.buttonMobileNavigation');
var mobileNavigationSite = document.querySelector('.mobileNavigationSite');
var flagСondition = false;

function pressButton() {
    if (flagСondition === false) {
        buttonMobileNavigation.style.color = '';
        buttonMobileNavigation.style.color = '#0000FF';
        openMenu();
    } else {
        buttonMobileNavigation.style.color = '';
        buttonMobileNavigation.style.color = '#000000';
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