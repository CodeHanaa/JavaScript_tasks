/*
لتكليف 02
قم بطباعة الوقت بعد مرور 10 سنوات من بداية الوقت
قم بإضافة ثانية واحدة فقط للوقت
بغض النظر عن ال Time Zone الخاص بك نريد أن يكون الوقت 00:00:01
شاهد النتيجة بالأسفل لتعرف الفكرة المطلوبة
*/
let dateOne = new Date();
dateOne.setFullYear(dateOne.getFullYear()+ 10);
dateOne.setHours(0,0,1);
console.log(dateOne.toString());

// output
//Fri Sep 21 2035 00:00:01 GMT+0300 (Eastern European Summer Time)
