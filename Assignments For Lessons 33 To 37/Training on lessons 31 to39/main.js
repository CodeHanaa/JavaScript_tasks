//equal
console.log(10 == "10");
console.log(-10 == "-10"); //compare value onaly
console.log(10 != "-10"); //compare value onaly
//identical
console.log(10 === "10"); //compare value and type
console.log(10 !== "10"); //compare value and type


console.log(typeof"hanaa" == typeof"najy");
console.log("hanaa" === "najy");
console.log(typeof"hanaa" === typeof"najy");

//logical operators
console.log(true);
console.log(!true);

/*
If Condition Challenge
*/

let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

(a < 10) ? console.log(10):(a >= 10 && a <= 40) ? console.log("10 To 40") :( a > 40) ? console.log("> 40") : console.log("Unknown");
// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if ((st.length*2).toString() === "34") {
    console.log("Good");
}

// W Position May Change
if (st.toLowerCase().includes("w")) {  // Corrected
    console.log("Good");
}

if (typeof st !== "string") {
    console.log("Good");
}

if (typeof st === "number") {
    console.log("Good");
}

if (st.substring(0, 6).repeat(2) === "ElzeroElzero") { // Corrected
    console.log("Good");
}

/*
    Switch Challenge
*/

let job = "Manager";
let salary = 0;

// if (job === "Manager") {
//     salary = 8000;
// } else if (job === "IT" || job === "Support") {
//     salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//     salary = 7000;
// } else {
//     salary = 4000;
// }

switch (salary) {
    case 0:
        salary = 8000;
        console.log (`My Money is ${salary}`);
        break;
    case 1:
        salary = 6000;
        console.log (`My Money is ${salary}`);
        break;
    case 2:
        salary = 7000;
        console.log (`My Money is ${salary}`);
        break;
    default:
        salary = 4000;
        console.log (`My Money is ${salary}`);
        break;
}
/*
    If Challenge
*/

let holidays = 0;
let money = 0;

// switch (holidays) {
//     case 0:
//         money = 5000;
//         console.log (`My Money is ${money}`);
//         break;
//     case 1:
//     case 2:
//         money = 3000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 3:
//         money = 2000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 4:
//         money = 1000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 5:
//         money = 0;
//         console.log(`My Money is ${money}`);
//         break;
//     default:
//         money = 0;
//         console.log(`My Money is ${money}`);
// }

if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
} else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
} else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
} else if (holidays === 5) {
    money = 0;
    console.log(`My Money is ${money}`);
} else { // This is equivalent to the default case
    money = 0;
    console.log(`My Money is ${money}`);
}