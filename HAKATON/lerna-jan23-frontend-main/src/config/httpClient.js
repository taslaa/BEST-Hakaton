import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://localhost:7101/api",
});

httpClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpClient;
