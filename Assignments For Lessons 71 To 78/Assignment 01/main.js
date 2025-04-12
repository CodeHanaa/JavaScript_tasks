let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMix = mix.map(function(ele){
    return isNaN(parseInt(ele)) && ele !== ","? ele : "";
}).reduce(function(ele,current){
    return `${ele}${current}`;
});// Elzero
console.log(newMix);