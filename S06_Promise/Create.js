var promiseObj = new Promise(function (resolve, reject) {
  resolve(100); //success data

  //   reject(100); //error data
});

promiseObj.then(
  function (successdata) {
    console.log("success");
    console.log(successdata + 100);
  },
  function (errordata) {
    console.log("error");
    console.log(errordata - 100);
  }
);
