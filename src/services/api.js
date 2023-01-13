import axios from "axios";

export const api = axios.create({
   baseURL: `https://backend-foodexplorer.onrender.com`,
})