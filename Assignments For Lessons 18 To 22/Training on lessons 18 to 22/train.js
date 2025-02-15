// 1---17
// task1-1
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color="blue";
document.querySelector("h1").style.fontSize="80px";
document.querySelector("h1").style.fontWeight="bold";
document.querySelector("h1").style.textAlign="center";
document.querySelector("h1").style.fontFamily=" Arial";
// task1-2
console.log("%cELZERO %cWEB %cSCHOOL","color:red; font-size:40px","color:Green; font-weight:bold; font-size:40px;","color:white;background-color:blue; font-size:40px")
// task1-3
console.group("group1");
console.log("massege one");
console.log("massege one");
    console.group("child group");
    console.log("massege one");
    console.log("massege one");
        console.group("grand child group");
        console.log("massege one");
        console.log("massege one");
        console.groupEnd();
    console.groupEnd();
console.groupEnd();
console.group("group2");
console.log("massege one");
console.log("massege one");
console.groupEnd();
// task1-4
console.table(["hanaa","bahaa","dalia","nader","fares"]);
// task1-5
    // one way
// console.log("Iam In Console");
// document.write("Iam In Page");
    /**two way */
/*console.log("Iam In Console");
document.write("Iam In Page"); */

//task2-1
let numberOne = 10, numberTow=20;
console.log (numberOne +""+ numberTow);  //1020
console.log(typeof (numberOne +""+ numberTow));  //string
console.log (`${numberOne}${numberTow}`);  //1020
console.log ( typeof`${numberOne}${numberTow}`);   //string
console.log(numberTow +"\n" +numberOne );
console.log(`${numberTow} \n ${numberOne}`);

//task2-2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
//task2-3
console.log ("\`I\'m In\ \n\
\\\\\
Love \\\\ \"\"\" ''\'\ \n\
++ With +\+\\\  \n\
\"\"\"\\\"\"\"\\\  \n\
\"\"JavaScript\"\"``");
//task2-4
let a = 21;
let b = 20;
console.log(`${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);

let titleCount="Elzero",decriptionCount="elzero web school",dateCount="25/10";
let code = 
`
<div>
    <h3>hello ${titleCount}</h3>
    <p>${decriptionCount}</p>
    <span>${dateCount}</span>
</div>
`
let result = code.repeat(4);
console.log(result);
document.write(result);
