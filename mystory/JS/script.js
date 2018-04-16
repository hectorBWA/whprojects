var spaceBtn = document.getElementById('btn1');
var waterBtn = document.getElementById('btn2');
var fireBtn = document.getElementById('btn3');
var contBtn = document.getElementById('btn4');
var spaceStory = document.getElementById('space');



spaceBtn.addEventListener('click', getSpace);
waterBtn.addEventListener('click', getWater);
fireBtn.addEventListener('click', getFire);
// contBtn.addEventListener('click', getCont);

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
    spaceStory.innerHTML = story + "your space shuttle just crashed on mars. The only materials that survived the crash are " + tools + " and an oxygen tank. You will need to use your " + tools + " to find a way off the planet before the oxygen tank runs out. " + "(" + timeframe + " hours)" + " You also have " + needs + " to keep your energy up. At this point you feel hopeless and lost. Instead of giving up you decide to explore th eplanet. Click continue.";
    document.body.style.backgroundColor = "purple";
    
}
getSpace();

function getWater(){
    spaceStory.innerHTML = story + "you have been voyaging across the atlantic for " + timeframe + " days. You haven't had any " + needs + " since you got hungry the first day. After rounding the same island " + timeframe + " times, you realize you have sailed too far. Immediately your survival instincts kick in and you pull out " + tools + " from your backpack. Click Continue." ;
    document.body.style.backgroundColor = "blue";
}
getWater();

function getFire(){
    spaceStory.innerHTML = story + "you are " + timeframe + " seconds away from falling to your death. RIP don't go near volcanos." ;
    document.body.style.backgroundColor = "red";
}
getFire();


function getCont(){
    var savior = prompt("who will come to your rescue?");
    var things = prompt("Name a tool.");
    var snack  = prompt("Pick a snack");
    spaceStory.innerHTML = "To your suprise, you see " + savior + " come to your rescue, he brought your favorite " + snack  + " to eat.";
}
getCont();








document.body.style.backgroundColor = "whitesmoke";