/*
DOM
- What Is DOM
- DOM Selectors
--- Find Element By ID
--- Find Element By Tag Name
--- Find Element By Class Name
--- Find Element By CSS Selectors
--- Find Element By Collection
------ title
------ body
------ images
------ forms
------ links
*/

// let byId =  document.getElementById("my-div");
// let byTag = document.getElementsByTagName("p");
// let className = document.getElementsByClassName("my-span");
// let queryElemet = document.querySelector(".special");
// let queryElemetall = document.querySelectorAll(".my-span");


// console.log(byId);
// console.log(byTag);
// console.log(byTag[1]);  
// console.log(className);
// console.log(className[1]);
// console.log(queryElemet);
// console.log(queryElemetall);
// console.log(queryElemetall[0]);
// console.log(queryElemetall[1]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms[0].one);
// console.log(document.forms[0].one.value);

// console.log(document.links);
// console.log(document.links[0].href);


// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "text from <span>main js</span> file";
// myElement.textContent = "text from <span>main js</span> file";

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// // document.images[0].src = "https://google.com";
// document.images[0].alt = "altrnative";
// document.images[0].title = "picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link");
// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));
// console.log(myLink.setAttribute("href","https://google.com"));
// console.log(myLink.setAttribute("title","google"));

console.log(document.getElementsByTagName("div")[0].attributes);

let myVar = document.getElementsByTagName("div")[0];

if(myVar.hasAttribute("data-info")) {
    myVar.removeAttribute("data-info");
}else{
    console.log("Not Found");
}

let myImage = document.getElementsByTagName("img")[0];

if(myImage.hasAttributes()){
    console.log("Has Attributes")
}