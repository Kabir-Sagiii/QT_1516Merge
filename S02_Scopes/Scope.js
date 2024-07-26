var gender = "male"; //global scope

if (true) {
  var uname = "sagar"; //block scope
  console.log(gender);
}
console.log(uname);

function f1() {
  var price = 99999; // function block scope
  // while (true) {}
  console.log(gender);
}
f1();
console.log(price);
