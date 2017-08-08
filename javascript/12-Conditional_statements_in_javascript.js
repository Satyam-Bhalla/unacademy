//Script showing the usage of conditional statements
var age = prompt("What is your age?");
var platform = "unacademy";

//Conditional statements
//If the platform is unacademy than you are awesome
if(platform === "unacademy"){ 
	console.log("You are awesome");
}

//This block always runs because the if statement is always true
if(true){
	console.log("This statement will execute everytime the code runs.");
}


//Example showing the usage of else block
//If the age of user is greater than or equal to 18 then he can vote
if(age >= 18){ 
	alert("You can vote!");
}else{
	alert("You cannot vote!");
}

//Example showing the usage of else if block
if(age > 18){
	alert("You can vote");
}else if(age === 18){
	alert("Congrats!! For your first vote");
}else{
	alert("You cannot vote!");
}