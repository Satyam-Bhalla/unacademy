//declaring function parameters
//Taking input from user
var length = prompt("Enter the length of square");
var breadth = prompt("Enter the breadth of square");

//function definition for calculating the area of square
function area_square(length,breadth){
	//Calculating area
	return length*breadth;
}

//calling the function and storing the value in result var
var result = area_square(length,breadth);

//showing the output
console.log(result);