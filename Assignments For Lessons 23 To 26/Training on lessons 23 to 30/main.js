// the challange1

let a  = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
//2
console.log (parseInt(Math.min(a,b,c,d)));
//10000
console.log(Math.pow(a,Math.trunc(d)));
//2
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d));
// console.log(d.toFixed());
// d b
console.log((b/ (Math.ceil(d))).toFixed(2)); //string
console.log(Math.round(b/ (Math.ceil(d)))); // سيُظهر 67 number

/* ch
    String Challenge
    All Solutions Must Be In One Chain
    You Can Use Concatenate
*/

let aa = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
let result = aa.slice(2, 6); // استخراج "zero"

// تحويل الحرف الأول إلى حرف كبير
let firstChar = result.charAt(0).toUpperCase(); // الحصول على الحرف الأول وتحويله إلى حرف كبير
let restOfString = result.slice(1); // الحصول على باقي السلسلة النصية

result = firstChar + restOfString; // دمج الحرف الكبير مع باقي السلسلة النصية

console.log(result); // Zero

// 8 H
console.log((aa.slice(13,14)).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log( aa.split(" ", 1));// ["Elzero"]

let index = aa.indexOf(" "); // 6
let elzero = aa.substring(0, index); // "Elzero"
console.log([elzero]); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${aa.substr(0, 6)} School`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
let res = aa.charAt(0).toLowerCase();   //1 char
let  resu = aa.slice(1).toUpperCase(); // الحصول على باقي السلسلة النصية
console.log(res+ resu ); // eLZERO WEB SCHOOl