// var promiseSuccess = new Promise(function (resolve, reject) {
//   resolve({
//     ok: true,
//     result: [{}, {}, {}],
//   });
// });

// promiseSuccess.then(
//     (successdata) => {
//       console.log("success");
//       console.log(successdata);
//     },
//     (errordata) => {
//       console.log("error");
//       console.log(errordata);
//     }
//   );

var promiseError = new Promise(function (resolve, reject) {
  reject({
    ok: false,
    error: "15_16 batch is super cool",
  });
});

promiseError.then(
  (successdata) => {
    console.log("success");
    console.log(successdata);
  },
  (errordata) => {
    console.log("Error");
    console.log(errordata);
  }
);
