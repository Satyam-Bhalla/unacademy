//properties in js
//Method 1 dot notation (.)
var person = new Object();
person.firstName = "Satyam";
person.lastName = "Bhalla";

//Method 2 brackets notation
person['age'] = 19;
person['property with spaces'] = "I can take anything as a value";


//Show output
console.log(person);
console.log(person.firstName);
console.log(person['age']);