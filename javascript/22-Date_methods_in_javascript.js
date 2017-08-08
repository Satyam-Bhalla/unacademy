//Creating date object with new
//get methods
var d = new Date(); 

console.log(d.getTime() + " milliseconds"); //January 1, 1970:

console.log(d.getDay() + " Day of the week");

console.log(d.getMonth() + " Month of the year");

console.log(d.getFullYear() + " Year");

console.log(d.getHours() + " hours of the day");

console.log(d.getMilliseconds() + " gives the last 3 digits of milliseconds.");

console.log(d.getSeconds() + "seconds of the minute");

console.log(d.getMinutes() + " minutes of the day.");



//set methods
var s = new Date();

console.log(s.setDate(20) + " date setted");// 1-31

console.log(s.setMonth(10) + " month setted" ); // 0-11

console.log(s.setFullYear(2020, 0, 14) + " year setted");//Optionally month and day

console.log(s.setMilliseconds(10000000000)); //from 1 jan,1970

console.log(s.setSeconds(59)); //0-59

console.log(s.setMinutes(10)); //0-59

console.log(s.setHours(18));  //0-23

console.log(s.setTime(15454545450)); //from 1 jan, 1970