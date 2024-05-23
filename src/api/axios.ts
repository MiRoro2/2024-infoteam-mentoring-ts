import axios from "axios";

const api = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/logo",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "tM/6wxBaSOQGsSquBDWq7w==Yg2Pb9H39eUpPGXl",
  },
});

export default api;
