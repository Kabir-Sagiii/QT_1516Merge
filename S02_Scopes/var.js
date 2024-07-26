var uname = "Raj"; //Global Scope
let city = "hyd"; //Global Scope

function f1() {
  var state = "TS"; //function scope
  let price = 9000; // block scope

  if (true) {
    var rating = 4.5; //function scope
    let salary = 100000;
  }
}
f1();

if (true) {
  var pName = "Samsung Galaxy"; // Global Scope
  let designation = "developer";
}
