/**
 * لديك ال JSON Object التالي
بإستخدام ما تعلمته نحتاج لطباعة الشكل كما في الصورة الموجودة بالأسفل
لاحظ أننا طبعنا 5 مقالات فقط بدلا من 10
يجب إستخدام ال Promises لعمل المطلوب
 */

let artecals = new Promise((resolve, reject) => {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", "articles.json");
  myRequest.send();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("Error loading data"));
      }
    }
  };
});

artecals
  .then((myData) => {
    console.log(myData); // ✅ أطبع الـ JSON كله
    for (let i = 0; i < 5; i++) {
      let main = document.createElement("div");
      main.className = "main";
      main.innerHTML = `
        <h2>${myData[i].userId}</h2>
        <h3>${myData[i].title}</h3>
        <p>${myData[i].description}</p>
      `;
      document.body.appendChild(main);
    }
    console.log("Data Loaded"); // ✅ أطبع الرسالة بعد تحميل البيانات
  })
  .catch((err) => {
    console.error(err);
  });
