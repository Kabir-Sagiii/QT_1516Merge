function f1() {
  console.log("f1 is called");
}

var id = setInterval(function () {
  f1();
}, 3000);

setTimeout(() => {
  clearInterval(id);
}, 10000);
