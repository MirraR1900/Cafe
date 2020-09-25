let buttonMobileNavigation = document.getElementById("buttonMobileNavigation");
let navigationSite = document.getElementById("navigationSite");
let flagСondition = false;

function pressButton() {
    if (flagСondition === false) {
        buttonMobileNavigation.style.color = '';
        buttonMobileNavigation.style.color = 'rgb(0, 0, 255)'; 
        tooggleMenu();
        flagСondition = true;
    } else {
        buttonMobileNavigation.style.color = '';
        buttonMobileNavigation.style.color = 'rgb(0, 0, 0,)'; 
        tooggleMenu();
        flagСondition = false
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
