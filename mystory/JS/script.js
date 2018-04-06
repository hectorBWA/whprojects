var spaceBtn = document.getElementById('btn1');
var waterBtn = document.getElementById('btn2');
var fireBtn = document.getElementById('btn3');

spaceBtn.addEventListener('click', getSpace);
waterBtn.addEventListener('click', getWater);
fireBtn.addEventListener('click', getFire);

function getSpace(){
    document.write('You are now in space.');
    document.body.style.backgroundColor = "purple";
}
getSpace();

function getWater(){
    document.body.style.backgroundColor = "blue";
}
getWater();

function getFire(){
    document.body.style.backgroundColor = "red";
}
getFire();


story = ' Haha.';

document.write(story);
console.log(story);

document.body.style.backgroundColor = "white";