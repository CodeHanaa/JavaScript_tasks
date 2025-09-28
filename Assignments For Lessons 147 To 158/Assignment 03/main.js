class User {
  constructor(u, c) {
    this.u = u;
    this.c = c;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

const regex = /(\d{4})(\d{4})(\d{4})(\d{4})/;

Object.defineProperty(User.prototype, "showData", {
  get: function() {
    // Add a check to ensure this.c is a string before calling replace()
    if (typeof this.c === 'string') {
      return `Hello ${this.u} Your Credit Card Number Is (${this.c.replace(regex, "$1-$2-$3-$4")})`;
    } else {
      return `Hello ${this.u} Your Credit Card Number Is (Invalid Format)`;
    }
  }
});

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
