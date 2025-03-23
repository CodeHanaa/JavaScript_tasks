let start = 0;
let swappedName = "elZerO";
let resulate = " ";

for(let i = start ; i <swappedName.length ; i++) {
    if(swappedName[i] === swappedName[i].toLowerCase()){
        resulate += swappedName[i].toUpperCase();
    }
    if(swappedName[i] === swappedName[i].toUpperCase()){
        resulate += swappedName[i].toLowerCase();
    }
    
}
console.log(resulate);

// Output
// "ELzERo"