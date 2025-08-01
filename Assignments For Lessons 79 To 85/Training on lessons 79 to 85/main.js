// /*
// Object
// - Intro and What Is Object
// - Testing Window Object
// - Accessing Object
// */

// let user = {
// // Properties
// : "Osama",
// theAge: 38,
// // Methods
// sayHello: function () {
//     return `Hello`;
// },
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());

/*
Object
- Dig Deeper
- Dot Notation vs Bracket Notation
- Dynamic Property Name
*/

// let myVar = "country";

// let user = {
// theName: "Osama",
// country: "Egypt",
// };

// console.log(user.theName);
// console.log(user.country); // user.country
// console.log(user.myVar); // user.country
// console.log(user[myVar]); // user.country

/*
Object
- Nested Object And Trainings
*/

// let available = true;

// let user = {
// name: "Osama",
// age: 38,
// skills: ["HTML", "CSS", "JS"],
// available: false,
// addresses: {
// ksa: "Riyadh",
// egypt: {
//     one: "Cairo",
//     two: "Giza",
// },
// },
// checkAv: function () {
// if (user.available === true) {
//     return `Free For Work`;
// } else {
//     return `Not Free`;
// }
// },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]); // Access With Index
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]);
// console.log(user["addresses"]["egypt"]["one"]);

// console.log(user.checkAv());

/*
Object
- Create With New Keyword new Object();
*/

// let user = new Object({
// age: 20,
// });

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";

// user.sayHello = function () {
// return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());

// /*
// Function this Keyword
// - this Introduction
// - this Inside Object Method
// --- When a function is called as a method of an object,
// --- its this is set to the object the method is called on.
// - Global Object
// - Test Variables With Window And This
// - Global Context
// - Function Context

// Search
// - Strict Mode
// */

// console.log(this);
// console.log(this === window);

// myVar = 100;

// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello() {
// console.log(this);
// return this;
// }
// sayHello();

// console.log(sayHello() === window);

// document.getElementById("cl").onclick = function () {
// console.log(this);
// };

// let user = {
// age: 38,
// ageInDays: function () {
// console.log(this);
// return this.age * 365;
// },
// };

// console.log(user.age);
// console.log(user.ageInDays());

// let user = {
//     name: "Hanaa",
//     age: 25,
//     sayHello: function(){
//         return "hello";
//     }
// };

// console.log(user);
// console.log(user.age);
// console.log(user.name);
// console.log(user.sayHello());


// let myVar = "countery";
// let use = {
//     theName:"Hanaa",
//     countery: "Egypt",
// };

// console.log(use.theName);
// console.log(use.countery);
// console.log(use.myVar);
// console.log(use[myVar]);

// let user = {
//     theName: "Hanaa",
//     age: 25,
//     skills: ["Html" , "Css" , "Bootstrap" , "Tailwaind" , "js"],
//     available: false,
//     Addresses: {
//         ksa: "Riydh",
//         egypt: {
//             one:"Cairo",
//             two:"Giza",
//         },
//     },
//     checkAv: function() {
//         if(this.available===true) {
//             return `free for work`;
//         }else{
//             return `not free for work`;
//         }
//     },
// };

// console.log(user);
// console.log(user.theName);
// console.log(user.age);
// console.log(user.skills);
// console.log(user["Addresses"].ksa);
// console.log(user["Addresses"]["egypt"]);
// console.log(user["Addresses"]["egypt"]["one"]);
// console.log(user["Addresses"]["egypt"]["two"]);

// console.log(user.checkAv());

// let user = {
//     age:25,
// };

// let user = new Object({
//     age: 50,
// });

// console.log(user);

// user.age = 100;
// user.name = "Hanaa";
// user.country = "Egypt";

// user.sayHello = function() {
//     return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.name);
// console.log(user.country);
// console.log(user.sayHello());


// console.log(this);
// console.log(this === window);

// myVar = 100;
// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello(){
//     console.log(this);
//     return this;
// }
// sayHello();
// console.log(sayHello() === window);

// document.getElementById("cl").onclick = function () {
//     console.log(this);
// };

// let user = {
//     age: 25,
//     ageInDay: function() {
//         // return user.age * 365;
//         return this.age * 365;
//     },
// };
// console.log(user.age);
// console.log(user.ageInDay());

// let user = {
//     age:25,
//     doubleAge:function() {
//         return this.age * 2;
//     },
// };
// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});
// obj.a = 100;
// console.log(obj);

// let copyObj = Object.create(user);
// copyObj.age = 150;
// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());


