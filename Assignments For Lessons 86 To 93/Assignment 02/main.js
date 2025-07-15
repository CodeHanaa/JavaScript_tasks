let myDivs = document.getElementsByTagName("div");

for (let i = 0; i < myDivs.length; i++) {
    myDivs[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    myDivs[i].setAttribute("alt", "Elzero Logo");
}

console.log(myDivs[0]);