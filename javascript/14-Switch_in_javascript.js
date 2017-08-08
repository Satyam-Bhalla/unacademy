//using switch in place of if statements
var i = 20;
switch(i){
	case 10: //If the condition matches the block will break after running the statements
		console.log("wrong");
		break;
	case 15:
		console.log("wrong");
		break;
	case 20:
		console.log("right");
		break;
	default: //If no case runs then the default will run 
		console.log("Too many cases");
} 