import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:9090/schedule/api/v1",
});
api.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
api.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";
api.defaults.timeout = 60000;
