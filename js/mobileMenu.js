var buttonMobileNavigation = document.querySelector('.buttonMobileNavigation');
var mobileNavigationSite = document.querySelector('.mobileNavigationSite');
var flag = false;

function pressButton() {
    if (flag === false) {
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
    flag = true;
};

function closeMenu() {
    mobileNavigationSite.style.display = 'none';
    flag = false;
};

buttonMobileNavigation.addEventListener("click", pressButton);