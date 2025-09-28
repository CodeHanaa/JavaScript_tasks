/**
 * لديك ال JSON Object التالي
بإستخدام ما تعلمته نحتاج لطباعة الشكل كما في الصورة الموجودة بالأسفل
لاحظ أننا طبعنا 5 مقالات فقط بدلا من 10
يجب إستخدام ال Promises لعمل المطلوب
 */

 fetch("articles.json")
 .then((response) => {
    return response.json();
 })
  .then((data) => {
    let myData = data;
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
  }).catch((arr) => {
    console.error("error loading data");
  })