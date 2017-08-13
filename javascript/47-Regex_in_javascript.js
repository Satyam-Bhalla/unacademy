var str = "Hello everyone 123 https://unacademy.com abc@gmail.com 3698521478";
//patterns
var patt1 = /[a-z]/g;           //find all the small letters
var patt2 = /[A-Z]/g;           //find all capital letters  
var patt3 = /[abc]/g;           //find a,b and c  
var patt4 = /[\d]/g;            //find all numbers
var patt5 = /[\s]/g;            //find all spaces
var patt6 = /[\S]/g;            //find everything other than spaces
var patt7 = /[\D]/g;            //find everything other than digits   
var patt8 = /[\W]/g;            //find everything other than digits and chracters 
var patt9 = /[^a-z]/g;          //find everything other than the small letters 
var patt10 = /[0-9]{10,12}/g;   //Find all the numbers of length from(10-12)

console.log(str.match(patt1));

console.log(str.match(patt2));

console.log(str.match(patt3));

console.log(str.match(patt4));

console.log(str.match(patt5));

console.log(str.match(patt6));

console.log(str.match(patt7));

console.log(str.match(patt8));

console.log(str.match(patt9));

console.log(str.match(patt10));