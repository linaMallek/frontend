import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://healthbooth-backend.onrender.com/",
  baseURL: "http://localhost:5001/",
  // other config options if needed
});

export default axiosInstance;
