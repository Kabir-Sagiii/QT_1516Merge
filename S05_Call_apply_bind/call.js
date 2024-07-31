var obj1 = {
  x: 100,
};

var obj2 = {
  x: 500,
};

var obj3 = {
  x: 50,
};

const fn = (a, b) => {
  var result = a + b + this.x;
  console.log(result);
};

fn.call(obj1, 10, 10); //120

// function fnAdd(a, b) {
//   var result = a + b + this.x; //5+5+100
//   console.log(result);
// }

// fnAdd.call(obj1, 20, 20); //140

// fnAdd.call(obj2, 100, 100); //700

// fnAdd.call(obj3, 100, 100); //250
