function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    let names = zName.split(" ");
    return`${names[0]} ${names[1][0].toUpperCase()}.`;
    }
    function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
        return `your age is ${parseInt(zAge)}`;
    }
    function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return `you liv in ${zCountry.substring(0,2).toUpperCase()}`
    }
    function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY