console.group("Group1");
console.log("Massage one");
console.log("Massage two");
    console.group("Child Group");
    console.log("Massage one");
    console.log("Massage two");
        console.group("Grand Child Group");
        console.log("Massage one");
        console.log("Massage two");
        console.groupEnd();
    console.groupEnd();
console.groupEnd();
console.group("Group2");
console.log("Massage one");
console.log("Massage two");
console.groupEnd();

console.group("Group 1");
    console.log("Message One");
    console.log("Message Two");

        console.group("Child Group");
            console.log("Message One");
            console.log("Message Two");

            console.group("Grand Child Group");
                console.log("Message One");
                console.log("Message Two");
            console.groupEnd();
        console.groupEnd();

console.groupEnd();

console.group("Group 2");
    console.log("Message One");
    console.log("Message Two");
console.groupEnd();