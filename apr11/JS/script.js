
// this - context based. look to the left of the dot.

var btns = document.querySelectorAll('button');

for( var i = 0; i < btns.length; i ++){
    btns[i].addEventListener('click', function(evt){
        console.log(evt.target);
        console.log(this);
    });
}

window.addEventListener('click', function(evt){
    console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON'){
        console.log(evt.target);
        console.log(this);
    }

});

var cars = ['jeep', 'honda', 'jeep', 'subaru'];
// console.log(cars);

//objects

var car = {
    type: 'jeep',
    model: 'wrangler',
    color: 'black',
    offroad: true,
    trim: ['sunroof', 'hardtop', '4 wheel drive']
};
// console.log(car.trim);

var hector = {
    firstname: "hector",
    lastname: 'zavala',
    age: 20,
    height: "5'6",
    hair: true,
    haircolor: 'brown',
    facialhair: false,
    greeting:function(msg){
        // console.log(this.firstname);
        // console.log(msg + this.firstname);
    }
}
// console.log(hector.haircolor);
hector.middlename = 'Jr';
// console.log(hector);

hector.greeting("hey there!");
hector.firstname = "bruce";
hector.greeting("I'm now ");

function Person(first, last, age, eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
    this.greeting = function(msg){
        console.log(msg + this.firstname);
    };
}

var myDad = new Person('Hector', 'Zavala', 40, 'brown');
// console.log(myDad.age);

var myMom = new Person('Amada', 'Higs', 39, 'brown');
// console.log(myDad.age);

var myDog = new Person('doggo', 'doggo', 5, 'white');
// console.log(myDad);
// console.log(myMom);
// console.log(myDog);

// myDog.greeting("hello ");

// username
// email
// password

function UserAcc(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

var myInfo = new UserAcc('doggo', 'doggo@gmail.com', 'ihatecats123');
console.log(myInfo);

var form = document.querySelector('form');


var users = [];
var user = 0;
// console.log(user);

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    // user = user + 1;
    users.push('user'+user);
    user++;
    for(var i = 0; i < form.elements.length; i ++){
       
        console.log(form.elements[i].value);
    }
    for(var i = 0; i < form.elements.length; i ++){
    console.log(form.elements[i].value);
}
    users[user] = new UserAcc(e, u, p);
    // console.log(users);
});
// console.log(submitBtn);