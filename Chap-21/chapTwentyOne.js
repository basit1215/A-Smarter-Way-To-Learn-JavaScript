var cities = ["karachi", "lahore", "rawalpindi", "multan", "quetta", "sukkar", "larkana", "islamabad", "peshawar", "abotabad", "skardu", "kashmir", "gilgit", "hyderabad", "jacobabad"];
var userInput = prompt("Check your City:");
var flag = false;

for (var i = 0; i < cities.length; i++) {
    if (cities[i] === userInput.toLowerCase()) {
        flag = true;
        break;
    }
}
if (flag) {
    alert("Allowed");
}
else {
    alert("Not Allowed");
}

var qualification = ["INTER", "INTERMEDIATE", "MATRIC", "MATRICULATION", "GRADUATE", "GRADUATION", "UNDER GRADUATE", "MASTERS"];
var userInp = prompt("Enter your Last Qualification:");
var flag = false;

for (var i = 0; i < qualification.length; i++) {
    if (qualification[i] === userInp.toUpperCase()) {
        flag = true;
        alert("Eligible");
        break;
    }
}
if (!flag) {
    alert("Not Eligible");

}
