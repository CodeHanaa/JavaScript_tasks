let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regEx =/^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i;
console.log(ip.match(regEx));