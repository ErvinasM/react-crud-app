import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

type CreateProductRequest = Omit<ProductModel, "id">;

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

const addProduct = async (productData: CreateProductRequest) => {
  const response = await api.post<ProductModel>('/products', productData);

  return response.data;
};

const updateProduct = async (id: string, productData: Omit<ProductModel, 'id'>) => {
  const response = await api.patch<ProductModel[]>(`/products/${id}`, productData);

  return response.data;
};

const deleteProduct = async (id: string | number) => {
  await api.delete(`products/${id}`)
  .then(response => {
    console.log(response+"istrinta")
  });
}

const ApiService = {
  fetchProducts,
  fetchProduct,
  fetchProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct,
};

export default ApiService;
