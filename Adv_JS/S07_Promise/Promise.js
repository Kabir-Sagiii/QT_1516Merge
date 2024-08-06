var promiseSuccess = new Promise(function (resolve, reject) {
  resolve({
    ok: true,
    result: [{}, {}, {}],
  });
});

var promiseError = new Promise(function (resolve, reject) {
  reject({
    ok: false,
    error: "15_16 batch is super cool",
  });
});

console.log(promiseSuccess);
console.log("-------------------------");
console.log(promiseError);
