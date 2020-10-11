import axios from "axios";

const api = axios.create({
  baseURL: "https://in-kasa-hackinrio.herokuapp.com/api/",
});

export default api;
