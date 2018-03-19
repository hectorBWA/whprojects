document.getElementById('btn2').style.color = "red";

// console.log("Here is my first console message");
// console.info("This is info.");
// console.warn("Danger Danger");
// console.error("Uh oh. Error.");

// alert box
// alert('Here is my pop up.');

// confirm box
// var userResult = confirm("Did you remember to lock you car?");
// console.log(userResult);


// prompt box
// var userName = prompt("What is your name?");
// console.log(userName);

// variables
//  must start with a lowercase letter
// may use camelCasing

var username;

var age = 27;
var decade = 10;
var double = 2;
var divide = 4;
// divide result by 4
var newAge =( ( age + decade) * double) / divide;

console.log(newAge);

// // concatination
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// alert(firstName + " "  + lastName);


// prompt user for make of vehicle
// year
// color
// confirm the result
function getUserVehicle(){
    var make = prompt("What is the make of your car?");
    var year = prompt("What is the year?");
    var color = prompt("What is the color?");
    var result = color + ", " + year + ", " + make + ".";
    alert(result);
}

function primaryUser(){
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last + " born in" + " " + place;
}

function secondUser(){
    var first = prompt("What is your side dish?");
    var last = prompt("What is your main dish?");
    var place = prompt("What is your drink?");

    document.getElementById('secondUser').innerHTML = first + " " + last + " and a cold" + " " + place;
}

function thirdUser(){
    var first = prompt("Quantity?");
    var last = prompt("Of what?");

    document.getElementById('thirdUser').innerHTML = first + " " + "pounds" + " " + "of" + " " + last;
}


function fourUser(){
    var first = prompt("Dogs?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last + " born in" + " " + place;
}