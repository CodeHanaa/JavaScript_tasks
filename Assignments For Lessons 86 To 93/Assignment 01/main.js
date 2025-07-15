let myDiv = document.getElementById("elzero");
let myDiv1 = document.getElementsByClassName("element");
let myDiv2 = document.getElementsByTagName("div");
let myDiv3 = document.querySelector("#elzero");
let myDiv4 = document.querySelector(".element");
let myDiv9 = document.querySelector('[name = "js"]');
let myDiv5 = document.querySelector("div");
let myDiv6 = document.querySelectorAll("#elzero");
let myDiv7 = document.querySelectorAll(".element");
let myDiv8 = document.querySelectorAll("div");
let myDiv10 = document.querySelectorAll('[name = "js"]');

let myDiv11 = document.body.children[0]; 
let myDiv12 = document.body.firstElementChild; 
let myDiv13 = document.body.childNodes.item(1); 

// console.log(myDiv);

console.log(myDiv === myDiv13);