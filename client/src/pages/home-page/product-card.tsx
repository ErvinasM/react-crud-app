import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import * as Styled from './styled';

type ProductCardProps = ProductModel;

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  category,
  images,
  price,
  inventory,
}) => (
  <Stack sx={{ border: 1.5, borderColor: 'grey.200', borderRadius: '15px', p: 2 }}>
    <Img src={images[0]} alt="" sx={{ aspectRatio: '1', width: 1, borderRadius: '15px' }} />
    <Styled.ProductCardContent>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ float: 'right', textAlign: 'right' }}>
          <Box sx={{ fontSize: '1.3rem', color: 'primary.main', fontWeight: 600 }}>{price}</Box>
          <Styled.ProductCardRating>{category}</Styled.ProductCardRating>
        </Box>

        <Typography sx={{ fontSize: '1.15rem', fontWeight: 500 }}>{title}</Typography>
        <Typography variant="subtitle2">{`${inventory}`}</Typography>
      </Box>

      <Button color="primary" variant="contained" sx={{ mt: 3 }}>View</Button>
    </Styled.ProductCardContent>
  </Stack>
);

export default ProductCard;
