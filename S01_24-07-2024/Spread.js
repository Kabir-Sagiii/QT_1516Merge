var obj1 = {
  name: "s1",
  city: "c1",
  gender: "male",
  phn: 999999999,
};
var obj3 = {
  nickName: "n1",
};

var obj2 = {
  ...obj1,
  email: "s1@gmail.com",
  state: "s1",
  ...obj3,
  city: "C2",
};

console.log(obj1);
console.log("----------------------------");
console.log(obj2);
