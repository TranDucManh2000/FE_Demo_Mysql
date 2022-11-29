import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3001/",
});
const authen = localStorage.getItem("authen");
request.defaults.headers.common["Authorization"] = `Bearer ${authen}`;
