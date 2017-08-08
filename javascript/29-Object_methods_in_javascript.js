//Object can also contain functions 
var person1 = {
  firstName: 'Satyam',
  lastName: 'Bhalla',
  age: 19,
  average : function(a,b,c){
    return (a+b+c)/3;
  }
}
console.log(person1.average(10,20,30));


//some inbuilt js methods
console.log(person1.hasOwnProperty('firstName'));

console.log(Object.getOwnPropertyNames(person1));

console.log(Object.keys(person1));

console.log(Object.values(person1));

console.log(Object.entries(person1));