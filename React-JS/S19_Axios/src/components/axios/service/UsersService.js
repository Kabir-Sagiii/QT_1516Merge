import axios from "axios";
export function getUsers() {
  //We have to write a logic to send a request to backend Application
  //1.url 2.method type
  //axios

  var usersPromiseObject = axios.get("https://randomuser.me/api/?results=20");
  //Handling the Promise
  usersPromiseObject
    .then((users) => {
      console.log("then");
      console.log(users.data.results);
    })
    .catch((error) => {
      console.log("catch");
      console.log(error);
    });
}
