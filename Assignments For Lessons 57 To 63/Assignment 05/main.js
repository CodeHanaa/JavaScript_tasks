function createSelectBox(startYear, endYear) {
    // Your Code Here
    //creat select element
    const selectBox = document.createElement("select");

    for (let year = startYear ; year <= endYear ; year++) {
        //creat option element
        const option = document.createElement("option");
        
        // option.value تحدد القيمة التي يتم إرسالها إلى الخادم.
        option.value = year;
        // option.textContent تحدد النص الذي يراه المستخدم.
        option.textContent = year;

        selectBox.appendChild(option);
    }
    //add select element in html body
    document.body.appendChild(selectBox);
}
createSelectBox(2000, 2021);