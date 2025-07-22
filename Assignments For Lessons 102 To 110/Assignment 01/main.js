let myprompt = window.prompt("Print Number From – To","Example: 5-20");

let parts = myprompt.split("-");

let num1 = parseInt(parts[0]);
let num2 = parseInt(parts[1]);

let start = Math.min(num1,num2);
let end = Math.max(num1,num2);

for(let i = start ; i <= end ; i++) {
    console.log(i);
    document.writeln(i+"<br>");
}




