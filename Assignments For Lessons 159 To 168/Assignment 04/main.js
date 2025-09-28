/**
 * التكليف 04
قم بطباعة تاريخ ووقت ميلادك ب 3 طرق مختلفة
طريقة كتابة التاريخ داخل String تعتبر كلها طريقة واحدة وهي String Date
تأكد أن ال 3 طرق يقوموا بطباعة التاريخ والوقت بنفس القيم كما في الأسفل

 * 
 */
let date1 = new Date("1999-12-15T10:30:15");
console.log(date1.toString());

let date2 = new Date(1999,12,15,10,30,15);
console.log(date2.toString());

let date3 = new Date("December 15,1999 10:30:15");
console.log(date3.toString());