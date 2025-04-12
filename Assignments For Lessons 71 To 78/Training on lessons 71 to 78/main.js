//higher order function => map function

// let arrName = [1,2,3,4,5,6];

// let newArr = [];

// for (let i = 0 ; i < arrName.length ; i++) {
//     newArr.push(arrName[i] + arrName[i]);
// }
// console.log(newArr);


// same idea with map

// let addSelf = arrName.map(function(Element,index,array){
//     return Element + Element;
// });

// let addSelf = arrName.map((Element) =>  Element + Element);
// console.log(addSelf);

// function addition(ele) {
//     return ele + ele;
// }
// console.log(addition(10));
// let add = arrName.map(addition);
// console.log(add);


// let swapingCase = "elZERo";

// let convert = swapingCase.split("").map(function(ele){
//     return ele === ele.toUpperCase()?ele.toLowerCase():ele.toUpperCase();
// }).join("");

// console.log(convert);

// let invertedNumber = [1, -10, -20, 15, 100, -30];

// let inverted = invertedNumber.map(function(ele){
//     return ele === -ele? ele : -ele;
// })
// console.log (inverted);

// let ignorElement = "Elz123er4o";
// let ignor = ignorElement.split("").map(function(element){
// return isNaN(parseInt(element))?element:"";
// }).join("");

// console.log(ignor);

// let numbers = [11,20,2,5,17,10];

// let evenNumbers = numbers.filter((function(ele){
//     return ele % 2 === 0;
// }));
// console.log(evenNumbers);

// let frindes = ["Ahmed","Sayed","Sameh","Asma","Amgad","Israa"];
// let newFrindes = [];
// for(let i = 0 ; i < frindes.length ; i++) {
//     if(frindes[i].startsWith("A")){
//         newFrindes.push(frindes[i]);
//     }
// }
// console.log(newFrindes);

// let newFrindes = frindes.filter(function(ele){
//     return ele.startsWith("A");
// });
// console.log(newFrindes)

// let sentence = "I Love Foood Code Too Playing Much";

// let smallWordes = sentence.split(" ").filter(function(ele){
//     return ele.length <= 4;
// }).join(" ");

// console.log(smallWordes);

// let ignorElement = "Elz123er4o";
// let ignor = ignorElement.split("").filter(function(ele){
//     return isNaN(parseInt(ele)); 
// }).join("");

// console.log(ignor);

// let mix = "A13BS2ZX";

// let newMix = mix.split("").filter(function(ele){
//     return !isNaN(parseInt(ele));
// }).map(function(ele){
//     return ele * ele;
// }).join("");

// console.log(newMix);

// let nums = [10,20,15,30];
// let add = nums.reduce(function(accumen,curent,index,arr){
//     console.log(`accumn => ${accumen}`);
//     console.log(`current element => ${curent}`);
//     console.log(`current index => ${index}`);
//     console.log(`current arr => ${arr}`);
//     console.log(accumen + curent);
//     console.log("##################");
//     return accumen + curent;
// },5);
// console.log(add);


// let name = ["Hanaa","Dalia","Bahaa","Nader","Fares","Najy","AbdElAzeem"];

// let newName =name.reduce(function(ele,current){
//     return ele.length > current.length? ele : current;
// },"AbdElAzeemAli");
// console.log(newName);

// let add = ["H","@","@","a","@","n","a","@","@","a"];

// let remove = add.filter(function(ele){
//     return !ele.includes("@");
// }).reduce(function(element,accumu){
//     return `${element}${accumu}`;
// });
// console.log(remove);

// let allLi = document.querySelectorAll("ul li");
// let allDiv = document.querySelectorAll(".content div")

// allLi.forEach(function(ele){
//     console.log(ele);
//     console.log(ele.innerHTML);
//     ele.onclick = function(ele){
//         // console.log(this);
//         // this.classList.add("active");
//         // allLi.forEach(function(ele){
//         //     this.classList.remove("active");
//         // });
//         allDiv.forEach(function(ele){
//             ele.style.display ="none";
//         });
//     };
    
// });


/*
Higher Order Functions Challenges

You Can Use
- ,
- _
- Space
- True => 1 => One Time Only In The Code

You Cannot Use
- Numbers
- Letters

- You Must Use [Filter + Map + Reduce + Your Knowledge]
- Order Is Not Important
- All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").filter(function(ele){
    return isNaN(parseInt(ele)) && ele !== ",";
}).reduce(function(ele,current){
    return `${ele}${current}`;
});

console.log(solution); // Elzero Web School