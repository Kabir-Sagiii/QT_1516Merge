function f1(f) {
  console.log("f1 is called");
  setTimeout(() => {
    f(f3); //f2
  }, 1000);
}

function f2(f) {
  console.log("f2 is called");
  setTimeout(() => {
    f(); //f3
  }, 1000);
}

function f3() {
  console.log("f3 is called");
}

f1(f2); //f1















// f1(); //5minute

// f2(); //after 5minute

// setTimeout(() => {
//   f1();
// }, 1000);

// setTimeout(() => {
//   f2();
// }, 1000);
