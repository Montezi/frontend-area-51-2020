import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333", // substituir pela URL da API
});

export default api;
