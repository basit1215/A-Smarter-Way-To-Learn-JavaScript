var cityName = ["Karachi", "Lahore", "Pindi", "Multan", "Sukkar", "Larkana", "Kashmir", "Islamabad", "Abotabad", "Hyderabad"];
console.log(cityName);

var usingShift = cityName.shift();
console.log(usingShift);
console.log(cityName);

var usingUnshift = cityName.unshift("Quetta", "Peshawar");
console.log(usingUnshift);
console.log(cityName);

var usingSplice1 = cityName.splice(2 , 1 );
console.log(usingSplice1);
console.log(cityName);

var usingSplice2 = cityName.splice(1 , 2 );
console.log(usingSplice2);
console.log(cityName);

var usingSplice3 = cityName.splice(3 , 4 , "Karachi", "Peshawar", "Lahore" );
console.log(usingSplice3);
console.log(cityName);

var usingSplice4 = cityName.splice(1 , 3 , "Abotabad"  );
console.log(usingSplice4);
console.log(cityName);

var usingSplice5 = cityName.splice(1 , 0 , "Karachi", "Sukkar", "Multan", "Larkana", "Pindi");
console.log(usingSplice5);
console.log(cityName);

var usingSplice6 = cityName.splice(6 , 0  );
console.log(usingSplice6);
console.log(cityName);

var usingSlice1 = cityName.slice(5 , 9  );
console.log(usingSlice1);
console.log(cityName);

var usingSlice2 = cityName.slice(-4);
console.log(usingSlice2);
console.log(cityName);

var str = "Abdul Basit Javed";
var usingSlice3 = str.slice(6, 11)
console.log(usingSlice3);
console.log(cityName);

var usingSlice4 = str.slice(12, 17)
console.log(usingSlice4);
console.log(cityName);

var usingSlice3 = str.slice(0, 6)
console.log(usingSlice3);
console.log(cityName);