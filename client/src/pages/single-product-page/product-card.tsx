import React from 'react';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import {
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import Img from 'components/ui/img';
import * as Styled from './styled';
import { SplideSlide } from '@splidejs/react-splide';

type ProductCardProps = ProductModel;

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  category,
  images,
  price,
  inventory,
}) => {
  const navigate = useNavigate();
  return (
    <SplideSlide>
    <Stack sx={{ border: 1.6, borderColor: '#efefef', borderRadius: '15px', p: 3,
    gap: 1, boxShadow: '#f4f4f4a1 0px 0px 7px 1px', cursor: 'pointer' }}>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.2', width: 1, borderRadius: '15px', objectFit: 'contain', background: '#f9f8f8' }} />
      <Styled.ProductCardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontSize: '1.2rem', fontWeight: 400 }}>{title}</Typography>
          <Typography  sx={{ fontSize: '0.9rem', fontWeight: 300, color: "#919191"}}>{`${category}`}</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 400 }}>{price}</Typography>
          <Button onClick={() => navigate(routes.SingleProductPage.createLink(id))} color="primary" variant="contained" 
          sx={{ mt: 1, borderRadius: '50px', fontSize: '0.6rem', minWidth: '0', p: '0.6rem' }}>
          <LaunchOutlinedIcon sx={{ width: '1rem', height: '1rem'}} /></Button>
        </Box>

      </Styled.ProductCardContent>
    </Stack>
  </SplideSlide>
  );
};

export default ProductCard;
