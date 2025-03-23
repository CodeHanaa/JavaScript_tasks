let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// إضافة "F" و "Y" و "X" إلى المصفوفة
allArrs.push(arr2[arr2.indexOf("F")], arr1[arr1.indexOf("X")],arr2[arr2.indexOf("Y")] );

// تحويل الأحرف إلى حروف صغيرة
allArrs = allArrs.map(letter => letter.toLowerCase());

// عرض النتيجة
console.log(allArrs.join("")); // fxy






let name1 = ["H","A","N","A","A"];
let name2 = ["D","A","L","I","A"];
let names = [];

names.push(name2[name2.indexOf("L")],name1[name1.indexOf("N")],name2[name2.indexOf("I")]);

names = names.map(letter => letter.toLowerCase());

console.log(names.join("")); //lna