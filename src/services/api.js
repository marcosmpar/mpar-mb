import axios from "axios";

const api = axios.create({
  baseURL: "https://mpar-backend.herokuapp.com"
});

export default api;
