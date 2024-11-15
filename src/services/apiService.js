// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';  // Replace with your actual API URL

// Function to fetch data from your Django API
export const getDataFromAPI = async () => {
  try {
    const response = await axios.get(`${API_URL}mymodel/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
