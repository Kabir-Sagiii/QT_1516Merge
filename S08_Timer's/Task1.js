function f1() {
  console.log("f1 is called");
}

var id = setTimeout(function () {
  f1();
}, 5000);

setTimeout(() => {
  clearTimeout(id);
}, 2000);

console.log(id); //1
