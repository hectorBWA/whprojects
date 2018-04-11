var spaceBtn = document.getElementById('btn1');
var waterBtn = document.getElementById('btn2');
var fireBtn = document.getElementById('btn3');
var contBtn = document.getElementById('btn4');
var endBtn = document.getElementById('btn5');
var spaceStory = document.getElementById('space');
var contStory = document.getElementById('cont');

spaceBtn.addEventListener('click', getSpace);
waterBtn.addEventListener('click', getWater);
fireBtn.addEventListener('click', getFire);
contBtn.addEventListener('click', getCont);
endBtn.addEventListener('click', getEnd);

var noun = prompt('Choose a nickname.');
var name = noun;

var save = prompt('Choose 2 materials to save your life.');
var tools = save;

var yum = prompt('Choose one food and one drink.');
var needs = yum;

var time = prompt ('Select a number between 1 and 10');
var timeframe = time;

var story = 'Hello ' + name + " ";


function getSpace(){
    spaceStory.innerHTML = story + "your space shuttle just crashed on mars. The only materials that survived the crash are " + tools + " and an oxygen tank. You will need to use your " + tools + " to find a way off the planet before the oxygen tank runs out. " + "(" + timeframe + " hours)" + " You also have " + needs + " to keep your energy up. At this point you feel hopeless and lost. You can either jump off the plant or explore, which will you do?";
    document.body.style.backgroundColor = "purple";
    
}
getSpace();

function getWater(){
    spaceStory.innerHTML = story + "you have been voyaging across the atlantic for " + timeframe + " days. You haven't had any " + needs + " since you got hungry the first day. After rounding the same island " + timeframe + " times, you realize you have sailed too far. Immediately your survival instincts kick in and you pull out " + tools + " from your backpack." ;
    document.body.style.backgroundColor = "blue";
}
getWater();

function getFire(){
    spaceStory.innerHTML = story + "you are " + timeframe + " seconds away from falling to your death. RIP don't go near volcanos." ;
    document.body.style.backgroundColor = "red";
}
getFire();


function getCont(){
    spaceStory.innerHTML = "excellent choice." ;
}
getCont();



function getEnd(){
    spaceStory.innerHTML = "RIP" ;
}
getEnd();




document.body.style.backgroundColor = "whitesmoke";