//Prototype in javascript
var myFunction = function(){}
console.log(myFunction.prototype);

//object prototype
var cat = {"name":"Fluffy"}
console.log(cat.prototype);

//__proto__ property of object
console.log(cat.__proto__);

//Making new function
function Dog(name, color){
  this.name = name;
  this.color = color;
}

//Creating objects for the Dog function
var tyson = new Dog('Tyson','Black');
console.log(Dog.prototype); //Return object
console.log(tyson.prototype); //Return undefined
console.log(tyson.__proto__);
console.log(Dog.prototype === tyson.__proto__);

//Adding age property to prototype
Dog.prototype.age = 3;
console.log(Dog.prototype);
console.log(tyson.__proto__);

//Creating new object
var goku = new Dog('Goku','white');
console.log(goku.__proto__);