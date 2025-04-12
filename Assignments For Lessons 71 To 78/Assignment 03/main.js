let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function(ele,currentvalue,currentindex,array){
    if(Array.isArray(currentvalue)){
        return ele.concat(currentvalue);
    }else {
        return ele.concat(currentvalue);
    }
},[]);

let newString = newArray.reduce(function (accumulator, currentLetter){
    return accumulator + currentLetter;
},"");
console.log(newString); // سيتم طباعة Elzero