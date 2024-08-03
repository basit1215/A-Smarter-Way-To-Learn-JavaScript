var cities = ["karachi", "Lahore", "Quetta", "Pindi"];
var userInp = prompt("Find your City:") ;
var flag = false;
for(var i = 0; i < cities.length ; i++){
    if(cities[i] === "Karachi"){
        flag = true;
        console.log("Eligible");
        break;
    }
    
 }

 if(flag){
    console.log("Not Eligible");
 }
