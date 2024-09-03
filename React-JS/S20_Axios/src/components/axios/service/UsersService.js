import axios from "axios";
export function getUsers() {
  var usersPromiseObject = axios.get("https://randomuser.me/api/?results=28");

  return usersPromiseObject;
}
