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

const fetchProduct = async (id: string | number) => {
  const response = await api.get<ProductModel>(`/products/${id}`);

  return response.data;
};

const fetchProductsByCategory = async (category: string | number) => {
  const response = await api.get<ProductModel>(`/products?category=${category}`);

  return response.data;
};

const handleDelete = async (id: string | number) => {
  await api.delete(`products/${id}`)
  .then(response => {
    console.log(response+"istrinta")
  });
}


const ApiService = {
  fetchProducts,
  fetchProduct,
  fetchProductsByCategory,
  handleDelete,
};

export default ApiService;
