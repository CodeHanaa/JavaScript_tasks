function multiply(...numbers) {
    let resualt = 1;
    for (let number of numbers) {
        if( typeof number === "string") {
            continue;
        }
        if(typeof number === "number") {
            if(number %1 !== 0) {
                number = Math.trunc(number);
            }
            resualt*=number;
        }
    }
    console.log(resualt);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
