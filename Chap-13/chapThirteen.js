var weight = prompt("Enter your weight in Kg:" , "50kg");
var age = +prompt("Enter your age:" , "18");
var gender = +prompt("Enter your gender:" , "male");
if(weight > 50 && age >= 18 && gender==="male"){
    alert("Come to our tryout!");
}
else{
    alert("Come to our cookout!");
}


var userInput = prompt("Enter anything, I Will tell you Entered a Number or a Letter (in Uppercase or Lowercase)");
var letterCheck = userInput.charCodeAt(userInput);
var numberCheck = parseInt(userInput);

if(letterCheck === 65 || letterCheck <= 90){
alert(userInput +  " is a Uppercase Letter" ) ;
}
else if(letterCheck === 97 || letterCheck <= 122){
    alert(userInput +  " is a Lowercase Letter" ) ;
}
else if(numberCheck == userInput){
    alert(userInput +  " is a Number " ) ;
}
else{
    alert("Invalid Input");
}


// Assigned value in number & check data type, data type is number.

var number = 15;
console.log(number);
var checkDataTypr = typeof number;
console.log(checkDataTypr);

// Assigned value in string & check data type, data type is string, because value is assigned in string.

number = "154";
console.log(number);
checkDataTypr = typeof number;
console.log(checkDataTypr);

// Assigned value in string & check data type, data type is number, value is assigned in string, but parseInt() change string into number.

number= parseInt(number);
console.log(number);
checkDataTypr = typeof number;
console.log(checkDataTypr);

// Assigned value in string & check data type, data type is number, value is assigned in string, but Number() change string into number.

number= Number(number);
console.log(number);
checkDataTypr = typeof number;
console.log(checkDataTypr);

// Q# Ask user name using prompt, if user not provided name then show console is Not provided....
// 1st Method using If Else, this method is long. 

  var userInp = prompt("Enter your name:");
  if(userInp){
    console.log(userInp);
  }
 else{
  console.log("Not provided");
 }

// Q# Ask user name using prompt, if user not provided name then show console is Not provided....
// 2nd Method using prompt passing two values or, this method is short. 

var userInp = prompt("Enter your name:") || "Not provided";
console.log(userInp);

//    In JS every value is Boolean value (true/false).
// 1st method to find boolean value.

console.log(!!"Basit");

// 2nd method to find boolean value...
// type Boolean Value...
// ! change the type, true ko false / false ko true...


console.log(Boolean(!"Basit"));
console.log(Boolean("Basit"));
console.log(Boolean(undefined));
console.log(Boolean(!undefined));
console.log(Boolean(null));
console.log(Boolean(!null));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));