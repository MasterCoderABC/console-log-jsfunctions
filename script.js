console.log("Hi I am console screen");

// function for full name
var firstName = "Aahan";
var lastName = "Choksi";
var fullName = firstName.concat(lastName);
console.log(fullName);

// function for length name
var length_of_full_name = fullName.length;
console.log(length_of_full_name);

// function for replace
var name1 = "I am Aahan Kapoor";
var replaced_name = name1.replace("Kapoor", "Choksi");
console.log(name1);
console.log(replaced_name);

// function for lower case
var capitalName = "AAHAN";
console.log(capitalName);
var lowerCase = capitalName.toLowerCase();
console.log(lowerCase);

//function for upper case
capitalName = lowerCase.toUpperCase();
console.log(capitalName);

//function for square root
var square_root = Math.sqrt(64);
console.log(square_root);

//funtion to find maximum number
var maxNum = Math.max(13, 2841, 7829, 1900, 12902, 1999);
console.log(maxNum);

//function to find minimum number
var minNum = Math.min(13, 2841, 7829, 1900, 12902, 1999);
console.log(minNum);

//function for power
var power = Math.pow(3, 3);
console.log(power);

//function for adjusting decimals seen
var bigNum = 3.141592653589793;
console.log(bigNum);
var fixed = bigNum.toFixed(2);
console.log(fixed);

//adding number
var numberOne = 1903801939;
var numberTwo = 1939304910;

//function for converting variable(integer) into string
console.log(numberOne + numberTwo);
var string1 = numberOne.toString();
var string2 = numberTwo.toString();
console.log(string1 + string2);

//increasing the number
var increment_number = 10;
increment_number++;
console.log(increment_number);

//decreasing the number
var decrement_number = 10;
decrement_number--;
console.log(decrement_number);