// Work With Chrome Developer Tools in console

// document.write("<h1>Work With Chrome Developer Tools</h1>");
// document.querySelector("h1").style.color="red";
// document.querySelector("h1").style.fontSize="80";
// document.write("<hr>");
// document.querySelector("hr").style.borderColor="blue";

// Where To Put The Code
window.onload = function () {
    document.querySelector("h1").style.color="blue";
};
// Ou0tput To Screen
window.alert("hello from js file");   // رساله تنبيه تظهر ف الويندوز ومشكلتها انها بتمنع تنفيذ كل اللي بعدها
document.write("<p>hello <span>my friends</span></p>");
console.log("hello every one");
/* 
Console Methods 
    log
    error
    table
And Styling 
    Directive %c
And Web API
*/
console.log("hello");
console.error("hello");
console.table(["hanaa","bahaa","dalia","nader","fares"]);
console.log("i go %cto %cschool","color:red; font-size:40px;","color:blue; font-size:40px;");
