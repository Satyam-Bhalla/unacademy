//Example of this
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFriend = new person("John", "Doe", 50, "blue");
var myBrother = new person("Sally", "Rally", 48, "green");

console.log(myFriend);
console.log(myBrother.lastName);

myBrother["Qualification"] = "Manager";
console.log(myBrother);
