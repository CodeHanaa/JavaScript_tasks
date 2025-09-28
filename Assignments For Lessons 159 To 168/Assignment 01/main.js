let dateOne = new Date();
let dateTwo = new Date("dec 15, 1999");

let diff = dateOne - dateTwo;//in milliseconds
console.log(Math.floor(diff / 1000), "Second"); //insecond
console.log(Math.floor(diff / 1000 / 60),"Minutes"); // in Minutes
console.log(Math.floor(diff / 1000 / 60 / 60), "Houres"); //in Houres
console.log(Math.floor(diff / 1000 / 60 / 60 / 24), "Days"); // in Days
console.log(Math.floor(diff / 1000 / 60 / 60 / 24/ 365), "years"); // in years