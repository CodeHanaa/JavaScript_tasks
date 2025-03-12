let num1 = 10;
let num2 = 30;
let num3 = "30";

/**
 * السطر الأول تأكد أن المتغير الثالث أكبر من الأول ولا يساوي الثاني في النوع
السطر الثاني تأكد أن المتغير الثالث أكبر من الأول ومساوي للثاني في القيمة ولا يساوي الثاني في النوع
السطر الثالث تأكد أن قيمة المتغير الثالث لا تساوي الأول من ناحية القيمة والنوع ولا تساوي الثاني من ناحية النوع
 */

num3 > num1 && typeof num3 !== typeof num2? console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
:num3 > num1 &&num3 == num2 && typeof num3 !== typeof num2? console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
:num3 !== num1 && typeof num3 !== typeof num2? console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"): console.log("out");