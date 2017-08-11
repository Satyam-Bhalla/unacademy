//Arrays in Javascript
var arr = ["Hello","Everyone","I","love","javascript"];
var arr1 = [8,5,2,3,6,9,7,4,1];

//Sorting elements alphabetically
arr.sort();
console.log(arr);

//Sorting elemets number wise
arr1.sort();
console.log(arr1);

//Finding max and min values from array
console.log(Math.max.apply(null,arr1));
console.log(Math.min.apply(null,arr1));

//Defining new array
var arrNum = ["25","13","150","100","18","45","65","72"];

//Problem in sorting
console.log(arrNum.sort());

//Solution of the problem
console.log(arrNum.sort(
    function(a, b){
      return a - b;
    }));

//similar to this
console.log("10"-"13");