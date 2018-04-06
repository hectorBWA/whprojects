
// // Math Object // 

// // INTEGERS - whole numbers
// // FLOATS - decimals

// console.log(.1 * .2);
var rounded = Math.round(0.000000000000000001);
// // .49 and below rounds down
// // .5 and up rounds up

// // Math.ceil();
var roundedUp = Math.ceil(0.000000000000000001);

// // Math.floor();
var roundedDown = Math.floor(0.99999999999);

// // Math.PI();
var pi = Math.PI;

// // Math.pow();
// console.log(Math.pow(8, 2));

// // Math.sqrt();
// console.log(Math.sqrt(64));

// // Math.random();
// console.log(Math.random());


// console.log('.round():'+rounded, 'ceil():'+roundedUp, '.floor():'+roundedDown, '.PI:'+pi);

/*
    Random Number generator

    */



/*    
var rand = Math.random();
rand = Math.floor(rand * 11);
console.log(rand);

function pickANum(){
    var userNum = prompt('guess a number between 0-10');
    checkNum(userNum);
}
pickANum();

function pickAnotherNum(){
    var userNum = prompt('guess again');
    checkNum(userNum);
}

function checkNum(num){
    if(num < rand){
        alert(num + ' is too low. Pick again.');
        pickAnotherNum();
    }else if (num > rand){
        alert(num + ' is too high. Pick again.');
        pickAnotherNum();        
    }else{
        alert(num + ' is the right number! You Win!');
    }
}
*/


var userPick = document.getElementById('userPick');
var submitBtn = document.getElementById('btn');
var refreshBtn = document.getElementById('btn2');
var userPickRes = document.querySelector('h1');


submitBtn.addEventListener('click', getUserPick);
refreshBtn.addEventListener('click', getNewNum);

// Global Variable
var rand 
var attempts = 3;

function getNewNum(){
    getRandColor();
    attempts = 3;
    userPickRes.innerHTML = '';
    userPick.value = '';
    rand = Math.random();
    rand = Math.floor(rand * 11);
    console.log(rand);
}
getNewNum();

function getUserPick(){
    attempts = attempts - 1;
    var userNum = parseInt(userPick.value);
    checkUserPick(userNum);
    userPick.value = '';
}

function checkUserPick(x){
    if(attempts > 0){
        if(x < rand){
            printUserRes(x + ' is too low. Pick again.');
        }else if (x > rand){
            printUserRes(x + ' is too high. Pick again.');
        }else if(x == rand){
            printUserRes(x + ' is the right number! You Win!');
        }else{
            printUserRes('Wrong Answer'); 
        }
    }else{
        printUserRes('Game Over.');
    }
    
}

function printUserRes(userRes){
    userPickRes.innerHTML = userRes;
}


// add another button that will reset the random number


var randColor;

function getRandColor(){
    randColor = Math.random();
    randColor = Math.floor(rand * 360);
    document.body.style.backgroundColor = 'hsl(' + randColor + ', 50%, 50%)';
    console.log(randColor);
}
getRandColor();

console.log(window.innerWidth, window.innerHeight);
window.addEventListener('mousemove', function(e){
    var width = Math.round( ( e.x / window.innerWidth) * 100);
    var height = Math.round( ( e.y / window.innerHeight) * 100);
    document.body.style.backgroundColor = 'hsl(${randColor}, ${width}%, ${height}%)';
})