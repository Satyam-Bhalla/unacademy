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

console.log(myJson.name);

for(let i in myJson){
  console.log(i);
}

for(let i in myJson){
  console.log(myJson[i]);
}