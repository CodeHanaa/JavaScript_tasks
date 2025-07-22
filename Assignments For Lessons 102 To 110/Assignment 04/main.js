let myDiv = document.querySelector("div");

function countdown(){
    myDiv.innerHTML -= 1;
    if(myDiv.innerHTML === "5") {
        location.replace("https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/");
    }
}

let counter = setInterval(countdown,1000)