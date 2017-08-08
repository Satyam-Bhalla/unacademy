//function usage
//I am defining a function here
function print(){
	console.log("I am the function block and you can execute me just by a simple call");
}

//Calling function
print();

//More about functions
function area_square(){
	//Taking input from user
	let length = prompt("Enter the length of square");
	let breadth = prompt("Enter the breadth of square");

	//Calculating area
	let area = length*breadth;
	console.log(area);

}

//function call
area_square();
area_square();