import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3001/",
});
const author = "author";
request.defaults.headers.common["Authorization"] = `Bearer ${author}`;
