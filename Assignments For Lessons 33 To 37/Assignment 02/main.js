let num1 = 9;
let str = "9";
let str2 = "20";

// السطر الأول: إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني
if (num1 == str) {
    console.log(`"${num1}" Is The Same Value As "${str}"`);
}

// السطر الثاني: إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني ولكن النوع مختلف
if (num1 == str && typeof num1 !== typeof str) {
    console.log(`"${num1}" Is The Same Value As "${str}" But Not The Same Type`);
}

// السطر الثالث: إذا كانت قيمة المتغير الأول ليست نفس قيمة المتغير الثالث وليست أيضا نفس النوع
if (num1 != str2 && typeof num1 !== typeof str2) {
    console.log(`"${num1}" Is Not The Same Value Or The Same Type As "${str2}"`);
}

// السطر الرابع: إذا كانت قيمة المتغير الثاني لا تساوي المتغير الثالث ولكنهم نفس النوع
if (str != str2 && typeof str === typeof str2) {
    console.log(`"${str}" Is The Same Type As "${str2}" But Not The Same Value`);
}