let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// metheods one

// for (let i = 0; i<haystack.length ; i++) {
//     if(needle === haystack[i]) {
//         console.log("found");
//     }
// }

// metheods two

// if(haystack.includes(needle) === true) {
//     console.log("found");
// }

// metheods three 


if (haystack.indexOf(needle) !== -1) {
    console.log("Found");
}
