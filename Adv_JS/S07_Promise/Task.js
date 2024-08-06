//create a function and
//return promise object from it without storing any data in the Promise

function createPromise() {
  var promise = new Promise(function (resolve, reject) {
    resolve("sagar");
  });

  return promise;
}

// var obj = createPromise();

// obj
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {});

//   createPromise().then().catch()

createPromise()
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });
