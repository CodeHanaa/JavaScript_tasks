let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

// استرجاع اللون من localStorage عند فتح أو عمل refresh للصفحة
let savedColor = window.localStorage.getItem("color");

if (savedColor) {
    // نطبق اللون على الـ div
    exp.style.backgroundColor = savedColor;

    // نضيف الـ active للعنصر اللي لونه مطابق
    lis.forEach((li) => {
        if (li.dataset.color === savedColor) {
            li.classList.add("active");
        }
    });
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // إزالة الـ active من كل العناصر
        lis.forEach((li) => {
            li.classList.remove("active");
        });

        // إضافة active للعنصر الحالي
        e.currentTarget.classList.add("active");

        // تخزين اللون في localStorage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);

        // تغيير خلفية الـ div
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});
