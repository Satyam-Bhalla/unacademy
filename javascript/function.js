//multiple function calls

function area_square(){
    //Taking input from user
    var length = prompt("Enter the length of square");
    var breadth = prompt("Enter the breadth of square");
    
    //calculating area
    var area = length*breadth;
    console.log(area);
}

//function call
area_square();


//function parameter
var length = prompt("Enter the length");
var breadth = prompt("Enter the breadth");

//function definition
function area_square(length,breadth){
  return length*breadth;
}

//calling function and storing the return value in result var
var result = area_square(length,breadth);

//showing the output
console.log(result);











//Looping all the properties in person2 object
for(var i in person2){
  console.log(i);
}

//Looping all the values of an object
for(var i in person2){
  console.log(person2[i]);
}
