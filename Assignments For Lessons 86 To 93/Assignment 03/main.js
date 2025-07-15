// عناصر الصفحة
const dollarInput = document.querySelector('input[name="dollar"]');
const resultDiv   = document.querySelector('.result');

const RATE = 51.6; // 1 USD = 15.6 EGP

// دالة لتنسيق الرقم بخانتين على الأكثر
const fmt = n => Number(n).toFixed(2).replace(/\.00$/, '');

// كل ما المستخدم يكتب أو يعمل Paste
dollarInput.addEventListener('input', () => {
    const usd = dollarInput.value.trim();

    // لو الحقل فاضي أو مش رقم
    if (usd === '' || isNaN(usd)) {
    resultDiv.textContent = '0 USD Dollar = 0 Egyptian Pound';
    return;
    }

    const egp = (usd * RATE).toFixed(2);
    resultDiv.textContent = `${fmt(usd)} USD Dollar = ${egp} Egyptian Pound`;
});
