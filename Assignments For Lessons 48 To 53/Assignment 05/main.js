let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i= +false ; i<friends.length;i++){
    if(friends[i].startsWith(letter.toUpperCase())){
        continue;
    }
    console.log(`"${i+1} => ${friends[i]}"`);
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"