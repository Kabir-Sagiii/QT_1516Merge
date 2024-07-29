function f1(x, y) {
  var result = x + y + this.x;
  console.log(result);
}

f1(5, 6); //16
