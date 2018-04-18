var paras = document.querySelectorAll('p');

// for(var i = 0; i < paras.length; i++){
//     // console.log(paras[i].classList.contains('para'));
//     if(!0){
//         console.log('not true');
//     }

// }

console.log(3 == '3');

console.log(typeof(3));
console.log(typeof('3'));

// == loose comparison
// === strict comparison

var usernum = parseInt(prompt('pick a number'));

if(!usernum){
    console.log(3 + usernum);
}else{
    console.log('please enter something')
}