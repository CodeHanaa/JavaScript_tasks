let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num *(true+true)); // 20

// Solution Three
console.log((+num-false)+(+num-false)); // 20

// Solution Four
console.log(+num << true); // 20
