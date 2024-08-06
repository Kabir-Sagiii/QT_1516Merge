var obj1 = {
  x: 100,
};

var obj2 = {
  x: 500,
};

var obj3 = {
  x: 50,
};

function fnAdd(a, b) {
  var result = a + b + this.x;
  console.log(result);
}

fnAdd.apply(obj1, [100, 100]);

fnAdd.apply(obj2, [50, 50]);
