//Number methods
var x = 100;

console.log(x.toString());

console.log(x.toExponential());

console.log(x.toFixed(2));

console.log(x.toPrecision(2));

console.log(x.valueOf());


x = true;
console.log(Number(x));  // returns 1

x = false;     
console.log(Number(x));        // returns 0

x = "10";
console.log(Number(x));       // returns 10

x = "10 20";
console.log(Number(x));        //NaN

console.log(parseInt("10"));         // returns 10

console.log(parseInt("10.33"));      // returns 10

console.log(parseInt("10 20 30"));   // returns 10

console.log(parseInt("10 years"));   // returns 10

console.log(parseInt("years 10"));   // returns NaN 