//Comparison operators
var a = 5;
var b = 3;

console.log(a>b); // a greater than b => Result: true

console.log(a<b); // a less than b => Result: false

console.log(a>=b);// a greater than or equal to b => Result: true

console.log(a<=b);// a less than or equal to b => Result: false

console.log(a!=b);// a is not equal to b => Result: true;

console.log(a!==b);// a is strictly not equal to b => Result: true




// == vs ===
a = 5;
b = '5';

console.log(a==b); // Whether a is equal to b

console.log(a===b);//Whether a is strictly equal to b

a=b; // assignment operator a now contains '5'

console.log(a===b); // whether a is strictly equal to b




//Bitwise operators
a = 5; //binary of a is 0101
b = 2; //binary of b is 0010

console.log(a&b); //Bitwise And
/*
	0101
	0010
   =0000 => 0
*/

console.log(a|b); //Bitwise or
/*
	0101
	0010
   =0111 => 7
*/

console.log(~a); //Bitwise Not
/*
	0101
   =1010 => -6 because in actual javascript numbers are 32 bit
   so ~5 becomes 11111111111111111111111111111010
   So this number becomes -6
*/

console.log(a^b); //Bitwise xor
/*
	0101
    0010
   =0111 => 7
*/

console.log(a>>1); // Right shift
/*
	0101
   =0010 => 2
*/