function checkStatus(a, b, c) {
    // Your Code Here
    let name =typeof a === "string" ?a:typeof b === "string" ?b:typeof c === "string" ?c:"no name";
    let age =typeof a === "number" ?a:typeof b === "number" ?b:typeof c === "number" ?c:"no age";
    let statue =typeof a === "boolean" ?a:typeof b === "boolean" ?b:typeof c === "boolean" ?c:"no statue";

    let availabilityMessage=statue? "You Are Available For Hire":"You Are Not Available For Hire";
    
    console.log(`Hello ${name},Your Age Is ${age},${availabilityMessage}`);

}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"