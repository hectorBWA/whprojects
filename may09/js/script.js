// var firstname = 'hector';

// function whatsName(){
//     var lastname = 'zavala';
//     console.log(firstname);
//     whatsLastName(lastname);
// }
// whatsName();

// // console.log(lastname);

// for(let i = 0; i < 5; i++){
//     console.log('running ' + i + ' times');
// }

// function whatsLastName(str){
//     console.log(str);
//     console.log(i);
// }

// console.log(name);
// name = 'david';

// for(i; i < 10; i++){
//     console.log('running again ' + i + ' times');
// }


// let firstname = 'Hector';
// let lastname = 'Zavala';
// let nameCombined = '${firstname} hector ${lastname}';
// console.log(nameCombined);


// let btn = document.querySelector('button');
// console.log(btn);
// btn.addEventListener('click', function(evt){
//     console.log(this);
//     var colorizer = () => this.style.color = 'red';
//     colorizer();
// });

// var logCase = function(str){
//     console.log(str);
//     console.log(this);
//     return () => console.log(this);
// }
// logCase('hector');

// let btns = document.querySelectorAll('button');
// console.log(btns);

// btns.forEach(function(ele))

var colors = ['red', 'orange', 'green', 'blue'];

for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

// JAVASCRIPT forEach loop
colors.forEach(function(x, y){
    console.log(x, y);
});

// for of loop
var nums = [10, 20, 30, 40];
for(let num of nums){
    num += 1;
    console.log(num);
}

let myName = 'Hector zavala';

for(let letter of myName){
    console.log(letter);
}