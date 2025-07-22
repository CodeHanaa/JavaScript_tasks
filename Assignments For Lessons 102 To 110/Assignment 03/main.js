let myDiv = document.querySelector("div");

function countdown(){
    myDiv.innerHTML -= 1;
    if(myDiv.innerHTML === "0") {
        clearInterval(counter)
    }
}

let counter = setInterval(countdown,1000)