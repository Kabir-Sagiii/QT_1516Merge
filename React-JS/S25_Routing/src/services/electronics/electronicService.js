import axios from "axios";
export function electronicsService() {
  //Axios Logic
  return axios.get("http://localhost:3000/categories_electronics");
}
