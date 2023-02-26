import React from 'react';
import ApiService from 'services/api-service';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import * as Styled from './styled';
import ProductCard from './product-card';

const AdminPage = () => {
  const [products, setProducts] = React.useState<ProductModel[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const fetchedProducts = await ApiService.fetchProducts();
      setProducts(fetchedProducts);
    })();
  }, []);

  return (
    <Styled.ProductsGrid>
      {products.map((productProps) => (<ProductCard key={productProps.id} {...productProps} />))}
    </Styled.ProductsGrid>
  );
};

export default AdminPage;
