let myString = "EElllzzzzzzzeroo";

let newMystring = myString.split("").reduce(function(ele,currentvalue,currentindex,array){
    if(currentindex === 0 || currentvalue !== array[currentindex - 1]) {
        return `${ele}${currentvalue}`;
    }else{
        return ele;
    }
});// Elzero

console.log(newMystring);

let newYstring = myString.split("").filter(function(ele, index, array) {
    return index === 0 || ele !== array[index - 1];
}).reduce(function(acc, curr) {
    return acc + curr;
}, "");

  console.log(newYstring); // Elzero