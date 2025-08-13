let theNumber = 100020003000;

// Convert the BigInt to a string first, then split into an array of characters
let myArr = String(theNumber).split('');

let mySet = new Set (myArr);

// Convert the Set to an array before using filter
let myNumber = Array.from(mySet).filter(item => item !== "0");


console.log(Number(myNumber.join("")));

