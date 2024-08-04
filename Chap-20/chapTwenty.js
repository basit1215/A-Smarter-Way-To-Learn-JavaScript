
var num = 25;

for (var i = 1; i <= 5; i++) {
    console.log(i);
    for (var j = 1; j <= 10; j++) {
        console.log(j);
    }
}

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log(i , j);
    }
}


var names = [["abdul", "basit"], ["muhammad", "hashir"], ["harib", "khan"]];

for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < names[i].length; j++) {
        console.log(names[i][j]);
    }
}



var arr = [2 , 3, 5 , 6 , 9 , 7, 1, 8, 4];
var min = arr[0]; 
var max = arr[0];

for(var i = 0; i < arr.length ; i++){
    if(arr[i] < min){
        min = arr[i]; 
    }
}
console.log(min);

for(var i = 0; i < arr.length ; i++){
    if(arr[i] > max){
        max = arr[i]; 
    }
}
console.log(max);




// var firstName = ["Abdul", "muhammad", "harib", "hassan"];
// var lastName = ["Basit", "hashir", "khan", "shiekh"];
// var fullName = [];

// for (var i = 0; i < firstName.length; i++) {
//     for (var j = 0; j < lastName.length; j++) {
//         fullName.push(firstName[i] + " " + lastName[j]);
//     }
// }
// console.log(fullName);



// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo " ];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
// for (var j = 0; j < lastNames.length; j++) {
//  fullNames.push(firstNames[i , j ] + lastNames[j]);
// }}
// console.log(fullNames);