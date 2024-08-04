var cities = ["karachi", "lahore", "quetta", "pindi"];
var userInp = prompt("Find your City:") ;
var flag = false;
for(var i = 0; i < cities.length ; i++){
    if(cities[i] === userInp.toLowerCase()){
        flag = true;
        console.log("Eligible");
        break;
    }
 }
 if(!flag){
    console.log("Not Eligible");
 }





var countries = ["pakistan", "india", "china", "america", "france", "afghanistan", "bangladesh", "turkey", "dubai"];
var userInput = prompt("Find your Country:");
var flag = false;

for (var i = 0; i < countries.length ; i++) {
    if (countries[i] === userInput.toLowerCase()) {
        flag = true;
    }
}

if (flag) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}