let nums = [2, 12, 11, 5, 10, 1, 99];

let numbers = nums.reduce(function(accum,currentvalue,currentindex,array){
    if(currentvalue % 2 === 1){
        return accum + currentvalue;
    }else{
        return accum * currentvalue;
    }
},1);

console.log(numbers);
// 500