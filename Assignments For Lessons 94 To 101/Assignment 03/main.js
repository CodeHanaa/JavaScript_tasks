let element = document.querySelector("div");
let prag = document.querySelector("p");

prag.remove();

let newElement1 = document.createElement("div");
newElement1.className="start";
newElement1.title = "Start Element";
newElement1.setAttribute("strat","start");
newElement1.textContent = "Start";

let newElement2 = document.createElement("div");
newElement2.className="end";
newElement2.title = "end Element";
newElement2.setAttribute("end","end");
newElement2.textContent = "end";

element.before(newElement1);
element.after(newElement2);