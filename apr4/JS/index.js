// // var username = document.getElementById('username');

// // function getUserName(){
// //     var username = prompt('What is your full name?');
// //     // var splitUserName = username.split(" ");
// //     // console.log(username);
// //     outputUserName(username);
// // }

// // function outputUsername(nameArray){
// //     // document.getElementById('firstname').innerHTML = nameArray(0);
// //     // document.getElementById('lastname').innerHTML = nameArray(nameArray.legth = 1);
// //     for(var i = 0; i < nameArray.length; i++){
// //         if(i = 0; i < nameArray.length -1){
// //             console.log("we got the zeroth element!", nameArray(i));
// //         }
// // }

// // getUserName();

// // var cars = ["jeep", "subaru", "honda"];
// // console.log(cars[1]);
// // console.log(cars.length);

// // cars.push("bmw");
// // console.log(cars);

// // cars.pop();
// // console.log(cars);

// // var removeCar = cars.pop();
// // console.log(cars);
// // console.log(removeCar);

// // cars.unshift("chevy", "chrystler");
// // console.log(cars);

// // cars.shift();
// // console.log(cars);

// // cars.splice(1, 1, "red", "green");
// // console.log(cars);

// // cars.splice(1, 1, "banana");
// // console.log(cars);

// // cars.splice(2, 1);
// // console.log(cars);

// var movies = ["sharknado", "sharknado 2", "sharknado 3", "meet the fockers", "little fockers"];
// console.log(movies);
// console.log(movies.length);

// movies.unshift("Die Hard");
// console.log(movies);

// movies.splice(2, 2, "godfather 1", "godfather 2", "godfather 3");
// console.log(movies);

// movies.push("guardians of the galaxy");
// console.log(movies);





// var movies2 = ["sharknado", "sharknado 2", "sharknado 3", "meet the fockers", "little fockers"];
// console.log(movies2);

// movies2.splice(0, 1);
// console.log(movies2);
// var removedMovie = movies2.slice(2, 3);
// console.log(removedMovie);


// function getUserAge(){
//     var userage = parseInt(prompt('how old are you?'));
//     if(userage < 21){
//         console.log('not old enough');
//     }else if(userage => 21){
//         console.log('good to go');
//     }else{
//         console.log('plenty old');
//     }
// }
// getUserAge();


// // ternary operator
// function getAge(){
// var age = prompt('whats my age again');
// (age >= 21) ? console.log('true') : console.log('false');
// }
// getAge();

document.body.style.backgroundColor = "#ff0000";

var noun = prompt('Choose a nickname.');
var name = noun;
var verb = prompt('What are you doing?');
var action = verb;
var verb = prompt('Please enter a verb');
var nextAction = verb;
var adjective = prompt('Please type an adjective.');
var describe = adjective;
var yum = prompt('Please enter the name of a food.');
var food = yum;
alert("You\'re all done. Ready for the answer?");
var story = name + ' is the name given to you by the sewage dwellers who found you at age 2.' + " " + action + " " + 'is what you do best.';
story += ' Your wife is ';
story += describe + " " + ' and she has mesotheleoma. ';
story += ' When you hear her cry out ';
story += name;
story += '! You know it is time to put more ointment on her toes. ';
story += nextAction.toUpperCase();
story += ' is what she does when you call her '
story += describe + '. ';
story += 'Being single allows for more ';
story += food + " " + 'to be enjoyed. ';
story += ' Haha.';

document.write(story);
console.log(story);
console.log(story.length);