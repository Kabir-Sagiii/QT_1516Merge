var obj = {
  x: 10,
  namedFn: function f1() {
    console.log(this); //current obj
  },
  arrowFn: () => {
    console.log(this); //empty obj
  },
};
obj.namedFn();
obj.arrowFn();
