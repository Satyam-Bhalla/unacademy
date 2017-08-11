//Arrays in Javascript
//Accessing javascript values
var arr = ["Hello","Everyone","I","Love","javascript"];

//Methods and properties of arrays
//getting length of array
console.log(arr.length);

//Pop will delete the last item from array
arr.pop();
console.log(arr);

//Push will insert the item in the last
arr.push("javascript");
console.log(arr);

//To check whether the variable is an array of not
console.log(Array.isArray(arr));

//To convert the array into string
console.log(arr.toString());

//Joining arrays
console.log(arr.join(" "));