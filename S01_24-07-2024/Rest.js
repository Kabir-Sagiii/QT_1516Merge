function f1(x, y, z, ...rest) {
  console.log(rest[1]);
}

f1(10, 20, 30, 40, 50, 60);
