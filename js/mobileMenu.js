let buttonMobileNavigation = document.getElementById("buttonMobileNavigation");
let navigationSite = document.getElementById("navigationSite");

function pressButton() {
    if (flagСondition === false) {
        buttonMobileNavigation.style.color = '';
        buttonMobileNavigation.style.color = 'rgb(0, 0, 255)'; 
        tooggleMenu();
    } else {
        buttonMobileNavigation.style.color = '';
        buttonMobileNavigation.style.color = 'rgb(0, 0, 0,)'; 
        tooggleMenu();
    }
};

function tooggleMenu() {
    if (navigationSite.className === "navigationSite") {
        navigationSite.className += " adaptive";
    } else {
        navigationSite.className = "navigationSite";
    }
}

buttonMobileNavigation.addEventListener("click", pressButton);
