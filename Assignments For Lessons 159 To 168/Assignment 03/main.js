/**
 * التكليف 03
في السطر الأول قم بطباعة التاريخ والوقت كاملا الخاص بآخر يوم في الشهر السابق
في السطر الثاني قم بطباعة إسم الشهر السابق وآخر يوم منه كما في الأسفل
يجب طباعة الرسالة بنفس الشكل
 * 
 */
let now = new Date();
console.log(new Date(now.getFullYear(), now.getMonth(),0).toString());
console.log(`Previous Month Is ${new Date(now.getFullYear(), now.getMonth(),0).toLocaleString('eng-US',{month:'long'})} And Last Day Is ${new Date(now.getFullYear(), now.getMonth(),0).getDate()}`);