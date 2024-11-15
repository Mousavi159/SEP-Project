// frontend/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // Django server URL

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/products/`, productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
  }
};
