// let chars = ["A", "B", "C", "D", "E", 10, 15, 6]; //[10, 15, 20, 6, "A", "B", "C", "D", "E"]
// console.log(chars.sort().copyWithin(0,3,6));
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];  //[10, 15, 20, 6, "A", "B", "C", "D", "E"]
// console.log(chars.sort().copyWithin(0,4,8));
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ["Z", "Y", "A", "D", "E", 10, 1];  
console.log(chars.copyWithin(2));

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]