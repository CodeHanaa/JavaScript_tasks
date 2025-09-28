/**
 * أكمل على ما سبق
قم بعمل Loop على جميع بيانات ال JSON Object السابق
قم بإنشاء div داخل الصفحة له id بإسم data
قم بطباعة البيانات داخل ال Div مثل البنية الموجودة في المثال بالأسفل
 */

let myRequest = new XMLHttpRequest();
myRequest.open("GET","articles.json");
myRequest.send();
myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let myData =JSON.parse(this.responseText);
        
        for(let i = 0 ; i < myData.length ; i++) {
            let myDiv = document.createElement("div");
            myDiv.className = "data";
            myDiv.innerHTML = `
            <h2>${myData[i].id}</h2>
            <h2>${myData[i].title}</h2>
            <p>${myData[i].author}</p>
            <p>${myData[i].section}</p>
            <p>${myData[i].content}</p>
            <p>${myData[i].gategory}</p>
            `;
            document.body.appendChild(myDiv);
        }
    }
}