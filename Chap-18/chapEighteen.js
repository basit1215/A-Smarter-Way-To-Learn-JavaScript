var arr = ["Karachi", "Lahore", "Pindi", "Quetta", "Peshawar", "Islamabad", "Abotabad", "Sukkar", "Skardu", "Hyderabad"];

for(var i = 0; i <= arr.length - 1 ; i++){
console.log("Cities====> " + arr[i]);
}

var tableNum = +prompt("You Enter any number and I will write the table of that number:");
var multiplyNum = +prompt("Enter number of multiply:");

for( var i = 1 ; i <= multiplyNum; i++){
    console.log(tableNum + " x " + i + " = " + tableNum * i);
}