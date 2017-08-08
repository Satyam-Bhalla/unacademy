//Method 1
//example showing looping in objects
var person1 = {
  firstName: "Satyam",
  lastName: "Bhalla",
  age: 20,
};

//for in loop example
for (var key in person1){
  console.log(key + " -> " + person1[key]);
}

//Changing property value
person1.age = 19;
console.log(person1['age']);


