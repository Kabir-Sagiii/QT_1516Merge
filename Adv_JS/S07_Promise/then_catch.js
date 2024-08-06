var promiseError = new Promise(function (resolve, reject) {
  resolve({
    ok: false,
    error: "15_16 batch is super cool",
  });
});

promiseError
  .then((successdata) => {
    console.log("success");
    console.log(successdata);
  })
  .catch((errordata) => {
    console.log("catch");
    console.log(errordata);
  });
