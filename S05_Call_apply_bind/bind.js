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

// var fnAdd = fnAdd.bind(obj1, 10, 10);
// fnAdd();

// var fnAdd = fnAdd.bind(obj3);
// fnAdd(20, 20);

// fnAdd.bind(obj2, 10, 10)();

fnAdd.bind(obj1)(10, 10);
