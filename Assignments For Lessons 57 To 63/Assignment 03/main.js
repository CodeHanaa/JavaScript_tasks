
function ageInTime(theAge) {
    if(theAge<10 || theAge >100) {
        console.log("Age Out Of Range");
        return;
    }

    const month = theAge * 12;
    const week = theAge * 52;
    const day = theAge * 365;
    const hour = day * 24;
    const minutes = hour * 60;
    const secound = minutes * 60;
    
    console.log(`your age is \n ${month} month \n and ${week} week \n and ${day} day \n and ${hour} hour \n and ${minutes} minutes \n and ${secound} secound}`);
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(25); // Months Example => 456 Months