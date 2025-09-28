/**
 * التكليف 05
قم بحساب الوقت اللازم لطباعة من رقم واحد وحتى 99999 في ال Console
يجب إستخدام ال Performance.now()
شاهد الرسالة المطلوب طباعتها بالأسفل
يجب إزالة الكسور من الرقم وعدم تقريبها
 */
let start = performance.now();
for(let i = 1; i <= 99999; i++) {
    console.log(i);
}
let end = performance.now();
let duration = end - start;
console.log(`Loop Took ${Math.floor(duration)} Milliseconds.`);