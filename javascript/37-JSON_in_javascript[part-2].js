//Making an Object
var myJson = {
  "name":{
    "first":"Satyam",
    "last": "Bhalla"
  },
  "age": 19,
  "skills": ["coding","singing","teaching"],
  "married": false,
  "superPowers": null
}

//Stringify method
var stringified = JSON.stringify(myJson);
console.log(stringified);
console.log(typeof stringified);


//Parse method
//Making string object
var stringJson = '{"name":"Satyam","age":19,"Country":"India"}';

console.log(typeof stringJson);

//Converting string to js object
var myParse = JSON.parse(stringJson);
console.log(myParse);