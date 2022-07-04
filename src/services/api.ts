import axios from "axios";

const BASE_URL = "https://randomuser.me/api/";

const api = axios.create({
  baseURL: BASE_URL,
});

export { api };
