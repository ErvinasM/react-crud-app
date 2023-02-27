import React from 'react';
import ApiService from 'services/api-service';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import routes from 'navigation/routes';
import * as Styled from './styled';
import ProductCard from './product-card';

const AdminPage = () => {
  const [products, setProducts] = React.useState<ProductModel[]>([]);
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await ApiService.deleteProduct(id);
    const fetchedProducts = await ApiService.fetchProducts();
    setProducts(fetchedProducts);
  };

  React.useEffect(() => {
    (async () => {
      const fetchedProducts = await ApiService.fetchProducts();
      setProducts(fetchedProducts);
    })();
  }, []);



  return (
    <Container sx={{p: '1.5rem'}}>
      <Button sx={{ml: '20px', color: 'white', fontWeight: '300', textTransform: 'capitalize', p: '5px 15px'}} onClick={() => navigate(routes.ProductFormPage)}>
        Add new product
      </Button>
      <Styled.ProductsGrid>
        {products.map((productProps) => (<ProductCard handleDelete={() => { if (window.confirm(`Are you sure you wish to delete ${productProps.title} product?`)) handleDelete(productProps.id)}} key={productProps.id} {...productProps} />))}
      </Styled.ProductsGrid>
    </Container>
  );
};

export default AdminPage;
