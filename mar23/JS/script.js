var btn =  document.getElementById('btn');
var btn2 =  document.getElementById('btn2');
var btn3 =  document.getElementById('btn3');
var navigation =  document.getElementById('navigation');
var head =  document.getElementById('head');
var text =  document.getElementById('text');
var link1 =  document.getElementById('link1');
var link2 =  document.getElementById('link2');

document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello";
});

document.getElementById("btn2").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "oh wow";
});

document.getElementById("btn3").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "very cool";
});

document.getElementById("link1").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "nice";
});

document.getElementById("link2").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "fresh";
});


function colorSwitch(){
    document.body.style.background = color = "yellow";
}


function headSwitch(){
    document.getElementById('head').style.fontSize = "100px";
    document.getElementById('head').style.color = "red";
}

function link1Switch(){
    document.getElementById('link1').style.color = "red";
}
function link2Switch(){
    document.getElementById('link2').style.color = "green";
}

function getUserName(){
    var first = prompt("First Name?");
    var last = prompt("Last Name?");
    var result = first + " " + last;
    document.getElementById('head').innerHTML = first + " " + last;

    
}



