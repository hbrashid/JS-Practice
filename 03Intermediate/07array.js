var countries = ["Pakistan", "USA", "Fiji", "UK"];

var states = new Array("Texas", "Colorado", "California", "Iowa");

// console.log(states[0]);

// console.log(states.length)

states[3] = "New York";

// console.log(states);

var user = ["Hassan", "hbrashid@gmail.com", 3, 34, true];
// console.log(user)

user.pop()
// console.log(user);
user.unshift("New value");
// console.log(user);
user.shift()
console.log(user);

console.log(user.indexOf(3));

console.log(Array.from("Hassan"));