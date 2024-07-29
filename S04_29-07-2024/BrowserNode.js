var obj1 = {
  x: 10,

  namedFn: function () {
    console.log(this);
  },

  arrowfn: () => {
    console.log(this);
  },
};

obj1.namedFn();
console.log("=======================");
obj1.arrowfn();
