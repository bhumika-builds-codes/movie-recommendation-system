import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "http://https://movie-recommendation-system-pfp0.onrender.com/api",
});


export default api;