let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

let [obj1,obj2,obj3] = myFriends;

// If chosen === 1
if (chosen === 1) {
  let { title: t, age: a, available: av, skills: [, skill2] } = obj1;
  console.log(t);
  console.log(a);
  console.log(av ? "Available" : "Not Available");
  console.log(skill2);
} 
"Osama"
39
"Available"
"CSS"

// If chosen === 2
if (chosen === 2) {
  let { title: t, age: a, available: av, skills: [, skill2] } = obj2;
  console.log(t);
  console.log(a);
  console.log(av ? "Available" : "Not Available");
  console.log(skill2);
} 

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3
if (chosen === 3) {
  let { title: t, age: a, available: av, skills: [, skill2] } = obj3;
  console.log(t);
  console.log(a);
  console.log(av ? "Available" : "Not Available");
  console.log(skill2);
} 

"Sayed"
33
"Available"
"Laravel"