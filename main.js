var d = new Date();
var time = document.getElementById('time');
var date = document.getElementById('date');
var temp = document.getElementsByTagName('h1');

var hours = d.getHours();
var mins = d.getMinutes();
var day = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();

time.textContent = hours + ':' + mins;
date.textContent = day + '/' + month + '/' + year;
temp.textContent = '';

