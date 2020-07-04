const lang = navigator.language;
let date = new Date();

let day = date.getDate();
let month = date.getMonth();
let weekday = date.toLocaleString(lang, {weekday: 'long'});
let monthName = date.toLocaleString(lang, {month: 'long'});
let year = date.getFullYear();

document.getElementById('monthName').innerHTML = monthName;
document.getElementById('weekday').innerHTML = weekday;
document.getElementById('day').innerHTML = day;
document.getElementById('year').innerHTML = year;