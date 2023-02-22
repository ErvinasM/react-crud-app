import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fetchProducts = async () => {
  const response = await api.get<ProductModel[]>('/products');

  return response.data;
};

const ApiService = {
  fetchProducts,
};

export default ApiService;
