import axios from "axios";

export const api = axios.create({
  baseURL: "https://opentdb.com/",
  timeout: 10000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});
