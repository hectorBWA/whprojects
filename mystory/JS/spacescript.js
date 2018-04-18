
function myFunction() {
    var savior = prompt("Name a celebrity.");
    var things = prompt("Name a tool.");
    var num = prompt("Pick a number.");
    var snack  = prompt("What is your favorite snack?");
    if (savior != null) {
        document.getElementById("demo").innerHTML =
        "To your suprise, you see a light approaching from a distance. Suddenly a shuttle lands, the doors open and hundreds of gerbals scatter around you. " + savior + " slowly exits the shuttle and approaches you. Could it be? are you being rescued? You notice " + savior + " is carrying a " + things  + " and " + snack + " for you to eat. Although you get excited, you are offered a trade. You either become a servant for the next " + num + " years or be left to rot for the remainder of your days.";
    }
}