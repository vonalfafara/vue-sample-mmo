import axios from "axios";

const http = axios.create({
  baseURL: "https://mmo-games.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "b9f377de43msh10628aacb321df0p1be870jsn29f9c84e4616",
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
  },
});

export default http;
