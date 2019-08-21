var inputDate = document.getElementById('calender');
var inputTime = document.getElementById('timeOrder');

inputDate.addEventListener('blur', function() {
    this.type='text';
});

inputDate.addEventListener('focus', function() {
    this.type='date';
});

inputDate.addEventListener('blur', function() {
    this.type='text';
});
inputTime.addEventListener('focus', function() {
    this.type='time';
})

