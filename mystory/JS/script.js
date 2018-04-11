var spaceBtn = document.getElementById('btn1');
var waterBtn = document.getElementById('btn2');
var fireBtn = document.getElementById('btn3');
var spaceStory = document.getElementById('space');
var oceanStory = document.getElementById('ocean');
var volcanoStory = document.getElementById('volcano');

spaceBtn.addEventListener('click', getSpace);
waterBtn.addEventListener('click', getWater);
fireBtn.addEventListener('click', getFire);


var noun = prompt('Choose a nickname.');
var name = noun;

var story = 'Hello ' + name + " ";


function getSpace(){
    spaceStory.innerHTML = story + "your space shuttle just crashed on mars.";
    document.body.style.backgroundColor = "purple";
}
getSpace();

function getWater(){
    spaceStory.innerHTML = story + "you have been voyaging across the atlantic for 7 days.";
    document.body.style.backgroundColor = "blue";
}
getWater();

function getFire(){
    spaceStory.innerHTML = story + "you are about to fall into a volcano RIP.";
    document.body.style.backgroundColor = "red";
}
getFire();

document.body.style.backgroundColor = "white";