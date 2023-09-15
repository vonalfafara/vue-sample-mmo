import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_HOST,
  },
});

export default http;
