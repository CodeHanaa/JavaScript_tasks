/**
 * التكليف 02
قم بعمل AJAX Call للوصول إلى ال JSON Object السابق
قم بالتأكد من أن ال Request تم بنجاح وتأكد من وجود ال Response Data
قم بطباعة ال Response في ال Console للتأكد من أن كل شيء سليم
قم بإستخدام ال Events الموجودة لطباعة رسالة Data Loaded بعد إنتهاء ال Response تماما
 */

let myRequest = new XMLHttpRequest();
myRequest.open("GET","articles.json");
myRequest.send();
myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let myData =JSON.parse(this.responseText);
        console.log(myData);
        console.log("Data Loaded");
    }
}
