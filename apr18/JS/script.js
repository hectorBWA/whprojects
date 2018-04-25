// var paras = document.querySelectorAll('p');

// // for(var i = 0; i < paras.length; i++){
// //     // console.log(paras[i].classList.contains('para'));
// //     if(!0){
// //         console.log('not true');
// //     }

// // }

// console.log(3 == '3');

// console.log(typeof(3));
// console.log(typeof('3'));

// // == loose comparison
// // === strict comparison

// var usernum = parseInt(prompt('pick a number'));

// if(!usernum){
//     console.log(3 + usernum);
// }else{
//     console.log('please enter something')
// }
var weatherKey = '57a9ec27d5c3c4ae5fdfcf489068a66f';
var myUl = document.querySelector('ul');

console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();
req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=57a9ec27d5c3c4ae5fdfcf489068a66f');
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        processData(apiData);
    }
}

req.send(null);


function processData(data){
    console.log(data.list);
    for(var i = 0; i < data.list.length; i++){
        var timeOfDay = data.list[i].dt;
        var myLi = `<li><p>${timeOfDay}</p></li>`;
        myUl.innerHTML += myLi;
    }
}