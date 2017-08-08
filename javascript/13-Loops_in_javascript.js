//Without loops you can print numbers as
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("With the help of loops");

//For loop example
for (var i =1; i <= 5; i++){
	console.log(i);
}

//While loop example
var a = 1;
while(a <= 5){ //checking condition
	console.log(a);
	a++; //incrementing the value every time the loop runs
}

//Do while loop
//This loop always runs 1 time without checking the condition
var b =1;
do{
	console.log(b);
	b++;
}while( b <= 5);