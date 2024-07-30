var checkLang =prompt("Enter your programming language:");

if(checkLang.toLowerCase()=== "javascript"){
    var langExp = prompt("Enter your Language Experience:");
    if(langExp.toLowerCase() === "2 years"){
        var city = prompt("Enter your City:");
        if(city.toLowerCase() === "karachi"){
            alert("Congratulations!! \nYou are Selected...")
        }
        else{
            alert("Your " + checkLang + " and " + langExp + " is very well, But " + city + " is not allowed, Please come Karachi.")
        }
    }
    else{
        alert("Sorry, minimumm 2 years experience is required.");
    }
}
else{
    alert("Sorry, " + checkLang + " is not required, Learn JavaScript.");
}