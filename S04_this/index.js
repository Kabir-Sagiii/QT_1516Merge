function fnNode() {
  console.log(this);
}
fnNode();

var nodeArrow = () => {
  console.log(this);
};

nodeArrow();
