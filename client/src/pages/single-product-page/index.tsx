import React from 'react';
import {
  Box, Button, styled, Typography,
} from '@mui/material';
import routes from 'navigation/routes';
import { useParams, Navigate } from 'react-router-dom';
import ApiService from 'services/api-service';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Img from 'components/ui/img';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as Styled from './styled';
import ProductCard from './product-card';

const StyledSplider = styled(Splide)(({ theme }) => ({
  border: '1.6px solid',
  borderColor: '#efefef',
  borderRadius: '15px',
  boxShadow: '#f4f4f4a1 0px 0px 7px 1px',
  background: '#f9f8f8',
  overflow: 'hidden',
  height: '100%',
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '40%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '30%',
  },
}));

const StyledSpliderList = styled(Splide)(({ theme }) => ({

  overflow: 'hidden',
  height: '100%',
  gap: '1rem',
}));


const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<undefined | ProductModel>(undefined);
  const [products, setProducts] = React.useState<ProductModel[]>([]);

  let cartBtn;

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedProduct = await ApiService.fetchProduct(id);
        setProduct(fetchedProduct);
        asyncCall(fetchedProduct);
      })();
    }
  }, []);


  async function asyncCall(pdata) {
        
        const fetchedProducts = await ApiService.fetchProductsByCategory(pdata.category);
        setProducts(fetchedProducts);
      }



  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (product === undefined) return null;

  if(product.inventory === "In Stock") 
    {cartBtn = <Button sx={{color: 'white', fontWeight: '400', fontSize: '0.9rem', gap: '0.5rem', p: '0.5rem 1rem'}}><AddShoppingCartIcon sx={{width: '1.1rem', height: '1.1rem'}}/>Add to Cart</Button>;}
  else
    {cartBtn = <Typography sx={{fontSize: '1.2rem', fontWeight: '300', color: 'grey', borderRadius: '4px', p: '5px 15px', border: '1.6px solid grey'}}>Out of Stock</Typography>} 

  return (
    <Box sx={{p: { xs: "30px", md: '50px', lg: "100px" }, display: 'flex', gap: '12rem', flexDirection: 'column'}}>
      <Box sx={{display: 'flex', gap: '2rem', margin: 'auto', justifyContent: 'space-evenly',
      flexDirection: { xs: "column", sm: "row" }}}>
        <StyledSplider aria-label="Product Images" data-splide='{"rewind":"true"}'>
          {product.images.map((img) => (
                  <SplideSlide>
                      <Img src={img} sx={{ width: 1, height: 1 }} />
                    </SplideSlide>
                ))}
                <div className="swiper-scrollbar"></div>
        </StyledSplider>
        <Box sx={{width: {xs: '100%', md: '50%'}, position: 'relative', display: 'flex', 
        flexDirection: 'column', gap: '2rem', justifyContent: 'space-between'}}>
          <Box>
            <Typography sx={{fontSize: '1.1rem', fontWeight: '300', color: 'grey'}}>{product.category}</Typography>
            <Typography sx={{fontSize: '2rem'}}>{product.title}</Typography>
            <Typography sx={{fontSize: '1rem', fontWeight: '300', mt: '2rem'}}>{product.body}</Typography>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px',
          justifyContent: 'space-between'}}>
            <Typography sx={{fontSize: '1.5rem', fontWeight: '400'}}>{product.price}</Typography>
            {cartBtn}
          </Box>
        </Box>
      </Box>

      <Box>
        <Typography sx={{fontSize: '1.6rem', fontWeight: '300', textAlign: 'center', mb: '3rem'}}>- Similar Products -</Typography>

        <StyledSpliderList data-splide='{"perPage":"5", "gap":"1rem", "type":"loop", "breakpoints": {"600": {"perPage": "1"}, "900": {"perPage": "3"}, "1200": {"perPage": "4"}}}'>
          {products.map((productProps) => (<ProductCard key={productProps.id} {...productProps} />))}
        </StyledSpliderList>
      </Box>
    </Box>
  );
};

export default SingleProductPage;
