// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
// للحصول على عدد الخصائص الرئيسية في الكائن (أسماء الألعاب)
let gameNames = Object.keys(myFavGames);

let objectLength = gameNames.length;  // عدد الألعاب في الكائن

for (let i = 0; i < objectLength; i++) {
  // الحصول على اسم اللعبة الحالي من مصفوفة المفاتيح
  let gameName = gameNames[i];
//   // الحصول على الكائن الفرعي للعبة الحالية
  let gameData = myFavGames[gameName];

  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${gameData.publisher}`);
  console.log(`The Price Is ${gameData.price}`);

//   // Check If Nested Object Has Property (bestThree)
//   // التحقق مما إذا كان الكائن الفرعي (gameData) يحتوي على الخاصية "bestThree"
  if (gameData.hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${gameData.bestThree.one}`);
    console.log(`Second => ${gameData.bestThree.two}`);
    console.log(`Third => ${gameData.bestThree.three}`);
  }
  console.log("#".repeat(20));
}
