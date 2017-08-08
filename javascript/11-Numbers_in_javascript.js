//Methods for creating numbers

//Method 1 simple var initialization
var x = 100;
console.log(typeof x);

//Method 2 with the help of new
var y = new Number(100);
console.log(typeof y);

//Some properties of numbers
var a = 20;         //Number datatype
var b = "10";       //String datatype

console.log(a+b);   //Returns "2010" in string format

console.log(a-b);   //Returns 10 of number datatype

console.log(100e5); //Returns a very large number

console.log(100e-8);

console.log("unacademy"/10);//Returns Nan(Not a Number) 

console.log(typeof NaN); //Returns number

console.log(10/0);  //Returns Infinity

console.log(typeof Infinity); //returns number
