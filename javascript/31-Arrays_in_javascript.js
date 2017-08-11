//Arrays in Javascript
//Creating arrays method 1
var arr1 = [1,5,3,6,9,7,4,1,5,8];
var arr2 = ["Satyam","Karan","Sahil","Sanyam","Yogesh"];

//Displaying arrays
console.log(arr1);
console.log(arr2);

//Method 2 for creating arrays
var arr3 = new Array(1,2,5,8,9,6,3,4,7);
var arr4 = new Array("Audi","BMW","Bugati","Mercedes");

//Displaying arrays
console.log(arr3);
console.log(arr4);

//Checking the type of arrays
console.log(typeof arr1,typeof arr3);

//#######################################################


//Accessing javascript values
var arr = ["Hello","Everyone","I","Love","javascript"];


//Javascript arrays start from index 0
console.log(arr[0]);
console.log(arr[3]);


//Accessing arrays with loops
//Method 1
for(let i=0;i<arr.length;i++){   //Using for loop
  console.log(arr[i]);
}


//Method 2
for(let i in arr){     //Using for in loop
  console.log(arr[i]);
}

