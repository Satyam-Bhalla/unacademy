/*
The result of the following code is: "My cat's name is Tigger"
*/
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tigger");


//############################################################


var x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
var y = 2;


// The following code will behave the same as the previous code: 
var a = 1; // Initialize a
var b; // Declare b
console.log(a + " " + b); // '1 undefined'
b = 2; // Initialize b