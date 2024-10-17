import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-url.com/api", // Replace with your backend URL
});

export const fetchProducts = async () => {
  try {
    const response = await API.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await API.post("/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
