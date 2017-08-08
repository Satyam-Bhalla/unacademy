//Declaring variables
var length;
var breadth;

//Defining area_of_square function for length and breadth = 10
function area_of_square(){
	length = 10;
	breadth = 10;
	console.log(length*breadth);
}

//function call
area_of_square();

//##############################################################

//Defining area_of_rectangle for different values
function area_of_rectangle(length,breadth=7){
	console.log(length*breadth);
}

//function call
area_of_rectangle(5,6);
area_of_rectangle(7,6);
