let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// metheods 1

//remove firest element
friends.shift();
//remove last element
friends.pop();

console.log(friends) // ["Eman", "Osama"]

//######################################################
// metheods 2

friends.splice(friends.indexOf("Ahmed"),friends.indexOf("Eman")); //remove ahmed
friends.splice(friends.indexOf("Gamal"),friends.indexOf("Osama")); //remove gamal

console.log(friends)

// #####################################################

// metheods 3

let newFriends = friends.filter(friends=> friends!=="Ahmed" && friends!=="Gamal");
console.log(newFriends);