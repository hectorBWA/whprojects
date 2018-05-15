let person1 = {
    firstName: 'John',
    lastName: 'Wick',
    age: 41,
    eyeColor: 'brown'

};


let People = function(fn, ln, a, ec){
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
    this.eyeColor = ec;
    this.greeting = function(ufn){
        return `It's nice to meet you ${ufn}! My name is ${this.firstName}`
    }
};

let matt = new People("Matt", "Higley", 21, "green");
let hector = new People("Hector", "Zavala", 20, "blue");


console.log(matt, hector);
console.log(matt.greeting('storm'));
console.log(hector.greeting('nightcrawler'));