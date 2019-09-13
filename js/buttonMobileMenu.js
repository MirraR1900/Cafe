var buttonMobileNavigation = document.querySelector('.buttonMobileNavigation');
var mobileNavigationSite= document.querySelector('.mobileNavigationSite');

function pressButton() {
    buttonMobileNavigation.style.color = '';
    buttonMobileNavigation.style.color = 'red';
    openMenu();
    console.log('Red');
};

function openMenu() {
    mobileNavigationSite.style.display = 'block';

};

buttonMobileNavigation.addEventListener("click", pressButton);
