import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getForecast = () => API.get("/forecast");
export const getActual = () => API.get("/actual");
export const getComparison = () => API.get("/comparison");
export const getMetrics = () => API.get("/metrics");