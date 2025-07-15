let eleImage = document.querySelectorAll("img");

for(let i = 0 ; i < eleImage.length ; i++) { // Changed <= to <
    if (eleImage[i].hasAttribute("alt")) {
        eleImage[i].setAttribute("alt","old");
    }
    else{
        eleImage[i].setAttribute("alt","Elzero New");
    }
}
