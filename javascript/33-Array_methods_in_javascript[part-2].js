//Arrays in Javascript
//Accessing javascript values
var arr = ["Hello","Everyone","I","love","javascript"];

//Reversing all the elements in array
console.log(arr.reverse());
console.log(arr.reverse());

//Function performed on each element with every method
function isString(test){
  if(typeof test === "string"){
    return true;
  }
}
console.log(arr.every(isString));

//Method for filling the complete array with some specific value
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");
console.log(fruits);

