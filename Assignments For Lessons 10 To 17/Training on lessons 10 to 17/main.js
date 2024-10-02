/*  Data Types And typeof Operator
    string
    number
    object
    boolean
*/
console.log(typeof "hanaa najy");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10,20,30]);  //array ارقام الطلبه المميزين
console.log(typeof ["hanaa","dalia"]);
console.log(typeof {name: "hanaa",age: 24,countery: "egypt"});  //object and his type is object {key:value}
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);  //not found
console.log(typeof null);   //is empty

/* Variables Introduction
    - What Is Variable ?  -container name store the value in it
    - Why We Use Variables ?   -لاستدعاء قيم معينه ف اي وقت واي مكان ويمكن تغيرها من خلال اسم المتغير 
    - Declare A Variable And Use  
    - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
    - Variable Without Var
    - Multiple Variables In The Same Line
    - Id And Global Variable
    - Loosely Typed vs Strongly Typed
*/

var user = "hanaa",
    age = 24;
console.log(user);
console.log(user);
console.log(user);
console.log(age);
console.log(hello);     //varaible=hello
hello.innerHTML = "option";


/* Identifiers Name Conventions And Rules 
    - Name Conventions And Rules
    - Reserved Words
*/

var userName = "hanaa";    //camelcase
console.log(userName);

/*
    Var
    - Redeclare (Yes)
    - Access Before Declare (Undefined)
    - Variable Scope Drama [Added To Window] ()
    - Block Or Scope Function

    Let
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function

    Const
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function
*/

var a = 10;    //declare
var a = 20;    //redeclar
console.log(a);

/*
    String Syntax + Character Escape Sequences
    \ Escape + Line Continue
    \n
*/

console.log('i go to "school"');
console.log("i go to 'school'");
console.log('i go to \'school\'');
console.log("i go to \"school\"");
console.log("i go \
    to\
    school\
    ");
console.log("my name is \n Hanaa Najy");

/*
    Concatenation
*/
let A = "i love\n";
let B = "my sister\n";
document.write(A + B);
console.log(A + B);

document.write("</br>");

let A1 = "\ni love\n";
let B1 = "my sister";
document.write(A1 + " " + B1);
console.log(A1 + B1);

/*
    Template Literals (Template Strings)
*/
// First Example

let a1 = "We Love";
let b1 = "JavaScript";
let c = "And";
let d = "Programming";

// console.log(a1 = " \"\" " + b1 +
// "\n" + c + " " + d);

// console.log(`${a1} "" '' \\ ${b1}
// ${c} ${d}`);
console.log(`${a1} ${b1} ${c} ${d}`);

let title = "i love";
let prag = "my sister";

let markup = `
    <div class="card">
        <div class="child">
            <h1>${title}</h1>
            <p>${prag}</p>
        </div>
    </div>
`;
console.log(markup);
document.write(markup);

/*===========================================
== Variables And Concatenation Challenge ==
===========================================

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat*/

let titleName = "Elzero" , desctiptionName = "Elzero Web School" , dateName = "25/10";
let Markup = `
    <div class="card">
        <div class="child">
            <h3>Hello ${titleName}</h3>
            <p>${desctiptionName}</p>
            <span>${dateName}</span>
        </div>
    </div>
`;
document.write(Markup.repeat(4));