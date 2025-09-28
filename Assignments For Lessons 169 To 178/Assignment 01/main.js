/**
 * التكليف 01
قم بإنشاء ملف JSON يحتوي على قائمة من المقالات عددها 5 بإسم articles.json
المقال يحتوي على ال id وإسم كاتب المقال والقسم الخاص بالمقال وعنوان المقال والمحتوى الخاص به
يمكنك تسمية العناصر كما تريد بإتباع ما تعلمته سابقا ويمكنك وضع أي بيانات عشوائية
مساعدة
 * 
 */
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json"); // لازم الاسم يتطابق
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let articles = JSON.parse(this.responseText);
    console.log(articles);

    // مثال: اطبع عنوان كل مقال
    articles.forEach(article => {
      console.log(article.title);
    });
  }
};
