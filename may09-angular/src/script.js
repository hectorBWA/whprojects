const value = 5;

document.getElementById('test').innerHTML = "I am a house";

const warn = document.querySelector('#warning');

if(value < 10){
  warn.innerHTML = "warning";
}

const colors = ['red', 'orange', 'yellow', 'green'];

let result = '';

colors.forEach(eachColor => {
  result = result + ' ' + eachColor;
});

document.getElementById('colors').innerHTML = result;
