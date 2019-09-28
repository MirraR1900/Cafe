let firstNameOrder = document.getElementById('firstNameOrder');
let phonNumberOrder = document.getElementById('phoneOrder');
let phoneClient = document.getElementById('phoneClient');
let inputTime = document.getElementById('timeOrder');
let numberGuests = document.getElementById('guests');
let messageOrder = document.getElementById('textOrder');
let checkOrder = document.getElementById('check');
let buttomOrder = document.getElementsByClassName('ButtonOrder');
let valueinputTime = inputTime.value;

//  mask for entering a phone number
window.addEventListener('DOMContentLoaded', function() {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }

    function mask(event) {
        let phone = "+7(___) ___ ____",
            i = 0,
            def = phone.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = phone.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });

        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
    };

    phonNumberOrder.addEventListener('input', mask, false);
    phonNumberOrder.addEventListener('focus', mask, false);
    phonNumberOrder.addEventListener('blur', mask, false);

    /**
     * An error appears on the Business Lunch page in the console. 
     * Because the field on the Index page is also read. There phoneClient is null
     */
    if(phoneClient != null) {
        phoneClient.addEventListener('input', mask, false);
        phoneClient.addEventListener('focus', mask, false);
        phoneClient.addEventListener('blur', mask, false);
    }
   

});

//  Checks the time range in the input "Time"
inputTime.addEventListener('blur', function() {
    this.type = 'text';
    let valueinputTime = inputTime.value;
    let valueParse = parseInt(valueinputTime);

    if(valueParse < 10 || valueParse > 22) {
        inputTime.style.borderColor = 'red';
    } 
});

inputTime.addEventListener('focus', function() {
    this.type = 'time';
    //return the border color so that the user enters the correct value
    inputTime.style.borderColor = '';
    inputTime.style.borderColor = 'rgba(255, 255, 255, 0.5)';
});