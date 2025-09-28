/**
 * التكليف 08
لديك السطر الموجود بالأسفل في الملف الرئيسي Main.js عبارة عن Function تقبل ثلاث قيم وتقوم بجمعهم
قم بإنشاء الملف mod-one.js والذي يحتوي على هذه ال Function التي تأخذ 3 Parameters
ال Function يجب أن تكون بلا إسم وقم بعمل اللازم في الملف لتستطيع إستخدامها في ملف ال main.js
قم بإنشاء ملف mod-two.js
إنسخ داخله الثلاث متغيرات الموجودين في الأسفل ولا تقم بالتعديل عليهم أبدا
قم بكتابة ما تريد في الملف mod-two.js حتى يعمل ال Code في ملف main.js بشكل سليم
 */

// main.js File
import calc from './mod-one.js';
import * as modOne from './mod-two.js'
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

