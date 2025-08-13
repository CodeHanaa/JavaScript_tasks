let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(2);

console.log(setOfNumbers);

setOfNumbers.forEach(number => {
  if(number===2){
    console.log(number);
  }
});