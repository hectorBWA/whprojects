var theDate = new Date();
console.log(theDate);
console.log(theDate.getDate());
console.log(theDate.getDay());
console.log(theDate.getFullYear());
console.log(theDate.getMonth());

console.log(theDate.toLocaleString('en-us', {month: 'long'}));



var dateStr = `
Today's date is the ${theDate.getDate()}th of ${theDate.toLocaleString('en-us', {month: 'long'})} ${theDate.getFullYear()}
`;


// MM/DD//YY

var myBday = new Date(1997, 08, 05);

var bDayStr = `
${myBday.toLocaleString('en-us', {month: '2-digit'})}/
${myBday.toLocaleString('en-us', {day: '2-digit'})}/
${myBday.toLocaleString('en-us', {year: '2-digit'})}
`;





// HH:MM:S







var stopBtn = document.querySelector('button');
stopBtn.addEventListener('click', function(){
    clearInterval(myTimer);
});
var myTimer = setInterval(updateTimer, 100);

function updateTimer(){
    var theTime = new Date();
    var timeStr = `
${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})}
`;
document.querySelector('h3').textContent = timeStr;
}

