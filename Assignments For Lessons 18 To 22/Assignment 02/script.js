let num = 3;

// Solution One
let result = num + num; // 3 + 3 = 6
console.log(result); // 6

// Solution Two
let result1 = num * (true + true); // 3 * 2 = 6  (true + true = 2 في JavaScript)
console.log(result1);

// Soultion Three
let result2 = num << true; // إزاحة الرقم 3 إلى اليسار بمقدار 1 بت، أي ضربه في 2
console.log(result2);

// Soultion Four
let result3 = Math.abs(num - (num + num + num)); // |3 - 9| = |-6| = 6
console.log(result3);

// Solution Five
let result4 = (num - false) + (num - false); // (3 - 0) + (3 - 0) = 3 * 2 = 6
console.log(result4);

// Solution Six
let result5 = num ** (true + true); // 3^2 = 9
result5 = result5 - (true + true + true); // 9 - 3 = 6
console.log(result5);