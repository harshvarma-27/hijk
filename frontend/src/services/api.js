import axios from "axios";

const API = axios.create({
  baseURL: "https://wind-backend-kpma.onrender.com",
});

export const getForecast = () => API.get("/forecast");
export const getActual = () => API.get("/actual");
export const getComparison = () => API.get("/comparison");
export const getMetrics = () => API.get("/metrics");