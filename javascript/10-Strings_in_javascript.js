//Method 1
//String result of prompt in a variable
var result = prompt("What is your name?");
console.log("Welcome" + " " + result);

//Method 2
//using new for creating new string objects
var a = new String("Welcome" + " " + result); 
console.log(a);

//Some basic properties of strings

//checking the length of string
var b = "Hello everyone I am a string!!";
console.log(b.length); 

//converting the number to string datatype
var c = 100;
console.log(typeof c);
c = c.toString();
console.log(typeof c);