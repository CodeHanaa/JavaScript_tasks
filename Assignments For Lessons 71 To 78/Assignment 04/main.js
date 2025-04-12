let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numbers = numsAndStrings.filter(function(ele){
  return !isNaN(parseInt(ele)) && typeof ele !== "string";
}).map(function(ele){
  return -ele;
});

console.log(numbers);
// [-1, -10, 10, 20, -5, -3]