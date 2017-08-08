//Demo showing the usage of const
const pi = 3.14; //The value of this variable will not change
pi = 10; //This will give us an error
console.log(pi);


//Demo showing the usage of let
for(let i=0;i<3;i++){
	console.log(i);
}
//let makes a variable for the block in which its defined
console.log(i); //This will give us an error

//Demo showing the usage of var
for(var i=0;i<3;i++){
	console.log(i);
}
console.log(i);