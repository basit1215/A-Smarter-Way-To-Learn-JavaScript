var weight = prompt("Enter your weight in Kg:" , "50kg");
var age = +prompt("Enter your age:" , "18");
var gender = +prompt("Enter your gender:" , "male");
if(weight > 50 && age >= 18 && gender==="male"){
    alert("Come to our tryout!");
}
else{
    alert("Come to our cookout!");
}