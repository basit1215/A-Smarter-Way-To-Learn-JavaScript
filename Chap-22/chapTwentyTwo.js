

var str = "baSiT";
console.log(str);
var firstChar = str.slice(0,1);
var othersChar = str.slice(1);
firstChar = firstChar.toUpperCase();
othersChar = othersChar.toLowerCase();
str = firstChar + othersChar;
console.log(str);



var string = prompt("Enter Some Text:")
var flag = false;
for (var i = 0; i < string.length; i++) {
    if (string.slice(i, i + 2) === "") {
        flag = true;
        alert("Double space not allowed");
        break;
    }

}
if (!flag) {
    console.log(string);

}


var days = prompt("Enter Today's day Name:");
console.log(days.slice(0,1).toUpperCase() + days.slice(1).toLowerCase());
var abbr;
if (days.length > 3) {
    abbr = days.slice(0, 3);
}
console.log(abbr.slice(0,1).toUpperCase() + abbr.slice(1).toLowerCase());



