let myDiv =document.querySelector("div");
let myButten = document.querySelector("button");

window.onload = setTimeout(function(){
   myDiv.style.display="block";
},5000);

myButten.addEventListener("click",function(){
     myDiv.style.display = "none"
});