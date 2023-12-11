// productService.js
import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data || { products: [] }; // Ensure a valid structure even if the response is undefined
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export { getProducts };
