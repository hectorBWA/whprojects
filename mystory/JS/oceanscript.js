
function myFunction() {
    var savior = prompt("Name a celebrity.");
    var fish = prompt("Name a fish.");
    var num  = prompt("Pick a number.");
    if (savior != null) {
        document.getElementById("demo").innerHTML =
        "As you hurry to get all of your equipment out of your backpack. A loud siren sounds off from the distance. You look up and notice " + num + " ships sailing towards you. Smoke exits the side of the ships as they surround you.  " + savior  + " and " + num + " warriors exit one of the ships and all the attention shifts. " + savior + " claims the boats are filled with hundreds of pounds of " + fish + " . Unfortunately you will either be left to sink or rescued in exchange for " + num + " years as a personal servant.";
    }
}