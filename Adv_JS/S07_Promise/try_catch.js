function createPromise() {
  return new Promise(function (resolve, reject) {
    resolve(100);
    reject({ status: true, data: { name: "s1", city: "c1" } });
  });
}

async function fnName() {
  try {
    var res = await createPromise();
    console.log("try");
    console.log(res);
  } catch (error) {
    console.log("catch block");
    console.log(error);
  }
}

fnName();
