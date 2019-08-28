var firstNameOrder = document.getElementById('firstNameOrder');
var phonNumberOrder = document.getElementById('phoneOrder');
var inputDate = document.getElementById('calender');
var inputTime = document.getElementById('timeOrder');
var numberGuests = document.getElementById('guests');
var messageOrder = document.getElementById('textOrder');
var checkOrder = document.getElementById('check');
var buttomOrder = document.getElementsByClassName('ButtonOrder');




window.addEventListener('DOMContentLoaded', function() {
function setCursorPosition(pos, elem) {
    elem.focus();
    if(elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if(elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(event) {
    var phone = "+7(___) ___ ____",
    i = 0,
    def = phone.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
    if(def.length >= val.length) val = def;
    this.value = phone.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });

    if(event.type == "blur") {
        if(this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};

phonNumberOrder.addEventListener('input', mask, false);
phonNumberOrder.addEventListener('focus', mask, false);
phonNumberOrder.addEventListener('blur', mask, false);

});

inputDate.addEventListener('blur', function() {
    this.type='text';
});

inputDate.addEventListener('focus', function() {
    this.type='date';
});

inputTime.addEventListener('blur', function() {
    this.type='text';
});

inputTime.addEventListener('focus', function() {
    this.type='time';
});



