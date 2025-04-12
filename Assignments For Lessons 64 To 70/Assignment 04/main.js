function specialMix(...data) {
// let resulte = 0 ;
// for(let i = 0 ; i < data.length ;i++) {
//     if(typeof data[i]==="number") {
//         resulte += data[i];
//     }else if (typeof data[i]==="string" && !isNaN(parseInt(data[i].slice(0,2)))) {
//         resulte += +data[i].slice(0,2);
//     }
// }

// if(resulte === 0) {
//     return `All Is Strings`
// }

// return resulte;

let resulte = 0;
for (let i = 0; i < data.length; i++) {
if (typeof data[i] === "number") {
    resulte += data[i];
} else if (typeof data[i] === "string") {
    let numInString = "";
    for (let j = 0; j < data[i].length; j++) {
    if (!isNaN(parseInt(data[i][j]))) {
        numInString += data[i][j];
    } else if (numInString !== "") {
        resulte += parseInt(numInString);
        numInString = ""; // إعادة تعيين لتجميع الرقم التالي
    }
    }
    // إضافة أي رقم متبقي في نهاية السلسلة
    if (numInString !== "") {
    resulte += parseInt(numInString);
    }
}
}
if (resulte === 0) {
return `All Is Strings`;
}
return resulte;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

/**
 * 
الدورة الأولى (i = 0):

data[0] هو 10.
الشرط typeof data[0] === "number" صحيح.
resulte يصبح 0 + 10 = 10.
الدورة الثانية (i = 1):

data[1] هو "20Test30".
الشرط typeof data[1] === "number" خاطئ.
الشرط typeof data[1] === "string" صحيح.
ندخل الآن إلى الحلقة الداخلية (j):
j = 0: الحرف هو "2". !isNaN(parseInt("2")) صحيح. numInString يصبح "2".
j = 1: الحرف هو "0". !isNaN(parseInt("0")) صحيح. numInString يصبح "20".
j = 2: الحرف هو "T". !isNaN(parseInt("T")) خاطئ. وبما أن numInString ليس فارغًا ("20")، نقوم بتحويله إلى رقم (parseInt("20") وهو 20) وإضافته إلى resulte. resulte يصبح 10 + 20 = 30. ثم نعيد تعيين numInString إلى "".
j = 3: الحرف هو "e". !isNaN(parseInt("e")) خاطئ. numInString لا يزال فارغًا، لذا لا نفعل شيئًا.
j = 4: الحرف هو "s". !isNaN(parseInt("s")) خاطئ. numInString لا يزال فارغًا، لذا لا نفعل شيئًا.
j = 5: الحرف هو "t". !isNaN(parseInt("t")) خاطئ. numInString لا يزال فارغًا، لذا لا نفعل شيئًا.
j = 6: الحرف هو "3". !isNaN(parseInt("3")) صحيح. numInString يصبح "3".
j = 7: الحرف هو "0". !isNaN(parseInt("0")) صحيح. numInString يصبح "30".
بعد انتهاء الحلقة الداخلية: نتحقق إذا كان numInString ليس فارغًا ("30" في هذه الحالة). الشرط صحيح، لذا نحول "30" إلى رقم (30) ونضيفه إلى resulte. resulte يصبح 30 + 30 = 60.
الدورة الثالثة (i = 2):

data[2] هو 40.
الشرط typeof data[2] === "number" صحيح.
resulte يصبح 60 + 40 = 100.
بعد انتهاء الحلقة الخارجية:

resulte ليس 0.
الدالة ترجع قيمة resulte وهي 100.
ملخص الفكرة الرئيسية في معالجة النصوص:

عندما نجد نصًا، فإننا لا نحاول أخذ أول رقمين فقط. بل نقوم بالمرور على كل حرف في النص:

إذا كان الحرف رقمًا، نقوم بتجميعه مع أي أرقام سابقة رأيناها في نفس النص (لتكوين الرقم الكامل).
إذا كان الحرف ليس رقمًا، فهذا يعني أن الرقم الذي كنا نجمعه قد انتهى. نقوم بتحويل الرقم المجمع إلى عدد وإضافته إلى النتيجة الإجمالية، ثم نبدأ في تجميع رقم جديد (إذا وجد).
 */