var found = true;
var grade = 88.6;
var firstName = "Robert";
var lastName = "Methow";
//lets break it
/*
found = 0;
grade = "H";
firstName = false;
*/
console.log(found);
console.log("This grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// use template strings
console.log("Hi ".concat(firstName, " ").concat(lastName));
