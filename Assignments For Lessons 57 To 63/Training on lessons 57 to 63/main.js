/*
Function Advanced Practice
- Parameters
- Default
- Rest
- Loop
- Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
document.write("<div>");
document.write(`your name is : ${us}<br>`);
document.write(`your age is : ${ag}<br>`);
document.write(`your Hour rate is : ${rt}<br>`);
if (show === "Yes") {
    if (sk.length > 0) {
        document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
        document.write(`<p>Skills: No Skills</p>`);
    }
} else {
    document.write(`<p>Skills Is Hidden</p>`);
}
document.write("</div>");
}

showInfo("Osama", 38, 20, "No", "Html", "CSS");

document.write("<hr>")



/*
Function Advanced Practice
- Parameters
- Default
- Rest
- Loop
- Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    let div = document.createElement("div"); // Create the div

    let nameParagraph = document.createElement("p");
    nameParagraph.innerHTML = `your name is : ${us}`; // Set the content
    div.appendChild(nameParagraph); // Append to the div

    let ageParagraph = document.createElement("p");
    ageParagraph.innerHTML = `your age is : ${ag}`;
    div.appendChild(ageParagraph);

    let rateParagraph = document.createElement("p");
    rateParagraph.innerHTML = `your Hour rate is : ${rt}`;
    div.appendChild(rateParagraph);

    if (show === "Yes") {
        let skillsParagraph = document.createElement("p");
        if (sk.length > 0) {
            skillsParagraph.innerHTML = `Skills: ${sk.join(" | ")}`;
        } else {
            skillsParagraph.innerHTML = `Skills: No Skills`;
        }
        div.appendChild(skillsParagraph);
    } else {
        let skillsParagraph = document.createElement("p");
        skillsParagraph.innerHTML = `Skills Is Hidden`;
        div.appendChild(skillsParagraph);
    }

    document.body.appendChild(div); // Add the div to the document body
}

showInfo("Osama", 38, 20, "No", "Html", "CSS");

document.body.appendChild(document.createElement("hr")); //add the horizontal rule.

/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/

function showDetails(a , b , c) {

    let name = typeof a === "string" ? a : typeof b === "string" ? b : typeof c === "string" ? c : undefined;
    let age = typeof a === "number" ? a : typeof b === "number" ? b : typeof c === "number" ? c : undefined;
    let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : typeof c === "boolean" ? c : undefined;

    let statusText = status ? "Available For Hire" : "Not Available For Hire";
    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${statusText}`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"