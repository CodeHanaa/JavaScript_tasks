// امسك الفورم والعناصر
const form = document.getElementById('create-form');
const results = document.querySelector('.results');

// عند الضغط على "Create"
form.addEventListener('submit', function (e) {
e.preventDefault(); // يمنع إعادة تحميل الصفحة

// اجمع القيم
const count = parseInt(document.getElementById('elements').value);
const text = document.getElementById('texts').value;
const type = document.getElementById('type').value;

// فضي العناصر القديمة
results.innerHTML = '';

// أنشئ عناصر جديدة
for (let i = 1; i <= count; i++) {
    const el = document.createElement(type.toLowerCase()); // div أو section
    el.className = "box";
    el.title = "Element";
    el.id = `id-${i}`;
    el.textContent = text;
    results.appendChild(el);
}
});