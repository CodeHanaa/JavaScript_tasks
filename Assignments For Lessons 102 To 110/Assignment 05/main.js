let myDiv = document.querySelector("div");

function countdown(){
    myDiv.innerHTML -= 1;
    if ( myDiv.innerHTML === "5") {
    // لما نوصل للرقم 5 نفتح موقع Elzero في نافذة منبثقة
    window.open("https://elzero.org", "_blank", "width=600,height=400");
  }

  if ( myDiv.innerHTML === "0") {
    // لما نوصل للصفر نوقف العداد
    clearInterval(counter);
  }

}

let counter = setInterval(countdown,1000);