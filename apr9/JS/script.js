// function welcomeMsg(str){
//     // console.log(str);
//     return "Welcome " + str;
// }
// // console.log('Matt');
// console.log( welcomeMsg('Matt'));

// function calcNums(x,y){
//     // console.log(x + y);
//     return x + y;
// }
// console.log(calcNums(3, 2));

// var h3 = document.querySelector('h3');
// var user = document.querySelector('#user');

// function concatStrings(str1, str2){
//     return str1 + " " + str2;
// }
// concatStrings();

// function getFirstName(){
//     return prompt('What is your first name?');

// }

// function getLastName(){
//     return prompt('What is your last name?')
// }
// user.textContent = concatStrings(getFirstName(), getLastName());


// // function welcomeUser(){
// //     h3.innerHTML = concatStrings( getFirstName(), getLastName() );
// // }
// // welcomeUser();

var spans = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier'];
var plural = ['fish', 'monkeys', 'shoes', 'cactii' ];
var adj = ['big', 'tiny', 'slow', 'fast', 'tall'];
var number = ['300', '200', '100', '500' ];
var verb = ['run', 'eat', 'punch', 'jump', 'crawl'];
var liquid = ['water', 'juice', 'soda', 'cider' ];
var noun = ['lemoore', 'obama', 'tilted towers', 'loot lake' ];
var celebrity = ['megan fox', 'rosie odonald', 'ellen degenerous', 'oprah' ];
var place = ['snobby shores', 'fatal fields', 'anarchy achors', 'wailing woods' ];
var friend = ['amy', 'debra', 'janet', 'diana' ];
var famous = ['trump', 'oj simpson', 'yodeling kid', 'lil pump' ];
var nationality = ['mexican', 'italian', 'german', 'french' ];
// console.log(spans.length);

for(var i = 0; i < spans.length; i++){
    // console.log(spans[i].className);
    // if(spans[i].className == 'plural'){
    //     spans[i].style.color = 'red';
    // }
    switch(spans[i].className){
        case 'occupation':
            spans [i].textContent = occupations[getRandNum (occupations.length)];
            break;
        case 'plural':
            spans [i].textContent = plural[getRandNum (plural.length)];
            break;
        case 'adj':
            spans [i].textContent = adj[getRandNum (adj.length)];
            break;
        case 'number':
            spans [i].textContent = number[getRandNum (number.length)];
            break;
        case 'verb':
            spans [i].textContent = verb[getRandNum (verb.length)];
            break;
        case 'liquid':
            spans [i].textContent = liquid[getRandNum (liquid.length)];
            break;
        case 'noun':
            spans [i].textContent = noun[getRandNum (noun.length)];
            break;
        case 'celebrity':
            spans [i].textContent = celebrity[getRandNum (celebrity.length)];
            break;
        case 'place':
            spans [i].textContent = place[getRandNum (place.length)];
            break;
        case 'friend':
            spans [i].textContent = friend[getRandNum (friend.length)];
            break;
        case 'nationality':
            spans [i].textContent = nationality[getRandNum (nationality.length)];
            break;
        case 'famous':
            spans [i].textContent = famous[getRandNum (famous.length)];
            break;
        default:
            spans[i].style.color = 'yellow';
    }
}

function getRandNum(num){
    return Math.floor(Math.random() * num);
}
