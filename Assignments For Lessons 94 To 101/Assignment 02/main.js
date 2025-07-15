let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let current = document.querySelector(".current");
let result = document.querySelector(".classes-list div");

// الوظيفة الرئيسية لعرض الكلاسات
function showClasses() {
  // نمسح النتائج القديمة
  result.innerHTML = "";

  // نجيب الكلاسات ونحولها Array ونرتبها أبجديًا
  let classList = Array.from(current.classList).sort();

  if (classList.length === 0) {
    result.textContent = "No Classes To Show";
  } else {
    classList.forEach((cls) => {
      let span = document.createElement("span");
      span.textContent = cls;
      result.appendChild(span);
    });
  }
}

// حدث blur لحقل الإضافة
addInput.onblur = function () {
  let classesToAdd = addInput.value.toLowerCase().trim().split(" ").filter(c => c !== "");
  if (classesToAdd.length > 0) {
    classesToAdd.forEach((cls) => current.classList.add(cls));
    showClasses();
  }
  addInput.value = "";
};

// حدث blur لحقل الحذف
removeInput.onblur = function () {
  let classesToRemove = removeInput.value.toLowerCase().trim().split(" ").filter(c => c !== "");
  if (classesToRemove.length > 0) {
    classesToRemove.forEach((cls) => current.classList.remove(cls));
    showClasses();
  }
  removeInput.value = "";
};

// عرض الكلاسات أول مرة
showClasses();
