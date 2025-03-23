/*
Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,-(counter-true)).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(true,counter).reverse()); // ["Elham", "Mazero"]

let resulte = my.slice(true,counter).reverse();
let el = resulte[zero].slice(zero,resulte[zero].length - counter); //el
let zeroStr = resulte[+true].slice(counter - +true);
console.log(el.concat(zeroStr)); // "Elzero"

let Elzero = el.concat(zeroStr);
console.log (Elzero.slice(Elzero.indexOf("r"))); // "rO"

// ###################################################################################

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>sow ${showCount} products</h1>`);

for(let i = 0 ; i < showCount ; i++) {
    document.write(`<div>`);
    document.write(`<h3>[${i+1}] ${products[i]}</h3>`)
    for(let j = 0 ; j < colors.length ; j++){
        document.write(`<p>- ${colors[j]}</p>`);
    }
    document.write(`<p>- ${colors.join(" | ")}</p>`);
    document.write(`</div>`);
}

// ###################################################################################

/*
    Loop Challenge
*/
document.write(`<hr>`);

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let numAdmins = 3;

document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${numAdmins} Admins</div>`);
document.write(`<hr>`);

for(let i = 0 ; i<numAdmins ; i++) {
    document.write(`<div>`);
    document.write(`<p>The Admin For Team ${i+1} is ${myAdmins[i]}</p>`);
    document.write(`<h2>Team Members :</h2>`)
    // تحديد الحرف الأول بناءً على رقم الفريق
    let firstLetter;
    if (i === 0) {
        firstLetter = "A";
    } else if (i === 1) {
        firstLetter = "O";
    } else if (i === 2) {
        firstLetter = "S";
    }

    // إضافة حلقة للتحقق من أسماء الموظفين
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j].startsWith(firstLetter)) {
            if ( myEmployees[j] === "Anwar") {
                continue; // تخطي "Anwar" في الفريق الأول
            }
            document.write(`<p>- ${myEmployees[j]}</p>`);
        }
    }
    document.write(`</div>`);
    document.write(`<hr>`);
}